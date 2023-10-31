import { PostingType } from '@/app/utils/getPostings'
import getTimeDiff from '@/app/utils/getTimeDiff'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ListingProps {
  posting: PostingType
}

export default function Listing({ posting }: ListingProps) {
  return (
    <li className="group">
      <Link
        href={`/postings/${posting._id}`}
        className="flex flex-col md:flex-row mb-6 md:mb-12 "
      >
        <div className="relative w-full md:w-[270px] h-[280px] md:h-[180px] rounded-lg overflow-hidden">
          {posting.thumbnailURL ? (
            <Image
              src={posting.thumbnailURL && posting.thumbnailURL}
              alt="썸네일이미지"
              fill
              className="object-cover transition-scale duration-200 ease-in group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex justify-center items-center text-sm text-gray-100">
              No Thumbnail
            </div>
          )}
        </div>
        <div className="md:flex-1 md:px-6 md:py-2  flex flex-col justify-between">
          <div className="mt-3 md:mt-0 mb-4">
            <h6 className="text-sm text-gray-400 mb-1.5 md:mb-4">
              {posting.category}
            </h6>
            <h4 className="text-lg font-semibold mb-1.5">{posting.title}</h4>
            <p className="text-sm text-gray-500">{posting.description}</p>
          </div>
          <div className="text-xs text-gray-400">
            {getTimeDiff(dayjs(posting.createdAt))}
          </div>
        </div>
      </Link>
    </li>
  )
}