import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { User } from '@/models/user'
import { Date } from 'mongoose'

export interface UserType {
  _doc?: any
  _id: string
  name: string
  email: string
  image: string
  role: string
  provider: string
  createdAt: Date
  updatedAt: Date
}

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()
    if (!session?.user?.email) {
      return null
    }

    const currentUser = await User.findOne<UserType>({
      email: session.user.email,
    })
    if (!currentUser) {
      return null
    }
    return { ...currentUser._doc, _id: currentUser._id.toString() }
  } catch (error) {
    return null
  }
}