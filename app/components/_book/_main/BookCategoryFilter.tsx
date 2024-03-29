import { bookCategory } from '@/constants'
import Link from 'next/link'
import React from 'react'

interface BookCategoryFilterProps {
  category?: string
}

export default function BookCategoryFilter({
  category,
}: BookCategoryFilterProps) {
  return (
    <div className="hide-scroll mb-6 flex gap-2 overflow-y-hidden overflow-x-scroll text-sm text-gray-700">
      {[{ id: 0, category: '전체' }, ...bookCategory].map((categoryItem) => (
        <Link
          key={categoryItem.id}
          href={`/book?category=${categoryItem.category}`}
          className="shrink-0"
        >
          <div
            className={`block rounded-full border px-3 py-2 transition duration-200 ${
              categoryItem.category === category &&
              'border-transparent bg-blue-600 text-white'
            }`}
          >
            {categoryItem.category}
          </div>
        </Link>
      ))}
    </div>
  )
}
