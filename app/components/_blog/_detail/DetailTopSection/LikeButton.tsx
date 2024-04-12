'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import useLikeQuery from '@/hooks/query/useLikeQuery'
import useLikeMutation from '@/hooks/mutation/useLikeMutation'
import { IconHeart } from '../../../../../public/svgs/icons'

interface LikeButtonProps {
  className?: string
  postingId: string
}

export default function LikeButton({ className, postingId }: LikeButtonProps) {
  const { data: session } = useSession()
  const { data, isPending, error } = useLikeQuery(postingId)
  const { mutation: likeMutation } = useLikeMutation({
    postingId,
    session,
  })
  const handleLikeButton = () => {
    if (!session) return
    likeMutation.mutate(
      { postingId },
      {
        onError: (error) => {
          toast.error(error.message)
        },
      },
    )
  }

  if (error) {
    toast.error(error.message)
  }

  return (
    <button
      className={`cursor-pointer rounded border px-1.5 py-1 transition hover:opacity-70 disabled:cursor-not-allowed
        ${className}`}
      onClick={handleLikeButton}
      disabled={isPending}
    >
      <IconHeart
        className={`size-8 ${
          data?.isLike ? 'text-red-500' : 'fill-none stroke-white'
        }`}
      />
    </button>
  )
}
