import Image from 'next/image'
import React from 'react'
import { OmittedPostingType } from '@/interfaces/interface'
import subBg from '/public/images/sub-bg.png'
import EditPostingInfo from './EditPostingInfo'

interface EditTopSectionProps {
  posting: OmittedPostingType
  setPosting: React.Dispatch<React.SetStateAction<OmittedPostingType>>
  setThumbnailFile: React.Dispatch<React.SetStateAction<File | null>>
  refs: {
    categoryRef: React.RefObject<HTMLDivElement>
    titleRef: React.RefObject<HTMLDivElement>
    descriptionRef: React.RefObject<HTMLDivElement>
  }
}

export default function EditTopSection({ ...props }: EditTopSectionProps) {
  const { thumbnailURL: previewURL } = props.posting
  return (
    <section className="relative mb-20 h-[320px] w-full md:h-[420px]">
      <Image
        src={previewURL ? previewURL : subBg}
        alt="썸네일이미지"
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        className="object-cover brightness-50"
      />
      <EditPostingInfo {...props} />
    </section>
  )
}
