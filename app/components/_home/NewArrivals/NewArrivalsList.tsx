import getAllListing from '@/app/actions/getAllListing'
import Link from 'next/link'
import React from 'react'

export default async function NewArrivalsList() {
  const listing = await getAllListing({
    page: 1,
    limit: 5,
  })

  return (
    <ul>
      {listing.map((item) => {
        return (
          <li key={item._id} className="text-sm mb-1.5 last:mb-0">
            <Link href={`/blog/detail/${item._id}`}>
              <span className="mr-1">📄</span> {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
