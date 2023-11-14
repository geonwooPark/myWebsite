import React from 'react'
import Pagenation from '../Pagenation'
import EmptyState from '../EmptyState'
import ListingItem from '../ListingItem'
import { GetListingsType } from '@/app/interfaces/interface'
import getListings from '@/app/actions/getListings'

type ListingsProps = (
  | {
      path: 'postings'
      type: 'all'
    }
  | {
      path: 'search'
      type: 'search'
    }
  | {
      path: 'categories'
      type: 'category'
    }
) & {
  page: number
  limit: number
  search?: string
}

export default async function Listings({
  path,
  type,
  page,
  limit,
  search,
}: ListingsProps) {
  const { postings, postingCount }: GetListingsType = await getListings({
    type,
    search,
    page,
    limit,
  })

  return (
    <>
      {postingCount === 0 ? (
        <EmptyState label="작성된 게시글이 없어요!" />
      ) : (
        <main>
          <ul>
            {postings?.map((posting) => {
              return <ListingItem key={posting._id} posting={posting} />
            })}
          </ul>
          <div>
            <Pagenation
              path={path}
              search={search ? search : ''}
              postingCount={postingCount}
              page={page}
              limit={limit}
            />
          </div>
        </main>
      )}
    </>
  )
}
