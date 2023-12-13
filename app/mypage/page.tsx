import React from 'react'
import Section from '@/app/components/common/Section'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserInfo from '../components/_mypage/UserInfo'
import HeroSection from '../components/common/HeroSection'
import ActionLogTab from '../components/_mypage/ActionLogtab/ActionLogTab'

export default async function page() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <HeroSection
        title="My Page"
        description="내 정보 및 활동 내역을 확인해보세요"
      />
      <Section className="!pb-10">
        <UserInfo session={session} />
      </Section>

      <Section label="나의 활동">
        <ActionLogTab />
      </Section>
    </main>
  )
}
