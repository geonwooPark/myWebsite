import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { connectMongo } from '@/app/utils/database'
import NextAuth from 'next-auth/next'
import { User } from '@/models/user'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('빈칸을 모두 입력해주세요.')
        }
        await connectMongo()
        const user = await User.findOne({ email: credentials?.email })

        if (!user) {
          throw new Error('존재하지 않는 회원입니다.')
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password,
        )
        if (!pwcheck) {
          throw new Error('잘못된 비밀번호입니다.')
        }
        return user
      },
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
  ],

  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.type === 'oauth') {
        return await signInWithOAuth(account, profile)
      }
      return true
    },
    async jwt({ token }) {
      return token
    },
    async session({ session }) {
      return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
}

// NextJS 13에서 경로 핸들러를 사용하기 때문에 핸들러가 필요
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

/* eslint-disable-next-line */
const signInWithOAuth = async (account: any, profile: any) => {
  await connectMongo()
  const user = await User.findOne({ email: profile.email })
  if (user) return true

  await User.create({
    name: profile.name,
    email: profile.email,
    image: account.provider === 'google' ? profile.picture : profile.avatar_url,
    provider: account.provider,
  })
  return true
}