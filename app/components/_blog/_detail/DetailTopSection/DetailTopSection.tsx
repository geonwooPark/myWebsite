import Image from 'next/image'
import React from 'react'
import { PostingType } from '@/interfaces/interface'
import subBg from '/public/images/sub-bg.png'
import InteractionMetrics from './InteractionMetrics/InteractionMetrics'
import DetailPostingInfo from './DetailPostingInfo'

interface TopSectionProps {
  posting: PostingType
}

export default function DetailTopSection({ posting }: TopSectionProps) {
  return (
    <section className="relative mb-20 h-[320px] w-full md:h-[420px]">
      <Image
        src={posting.thumbnailURL ? posting.thumbnailURL : subBg}
        alt="썸네일이미지"
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        className="object-cover brightness-50"
      />
      <DetailPostingInfo posting={posting} />
      <InteractionMetrics postingId={posting._id.toString()} />
    </section>
  )
}
