'use client'

import useNewArrivalsQuery from '@/hooks/query/useNewArrivalsListQuery'
import Link from 'next/link'
import React from 'react'
import SkeletonNewArrivalsList from './SkeletonNewArrivalsList'

export default function NewArrivalsList() {
  const { newArrivalsList, isPending } = useNewArrivalsQuery()
  if (isPending) return <SkeletonNewArrivalsList />

  return (
    <ul>
      {newArrivalsList?.map((item) => {
        return (
          <li key={item._id} className="mb-1.5 truncate text-sm last:mb-0">
            <Link href={`/blog/detail/${item._id}`}>
              <span className="mr-1">📄</span>
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
