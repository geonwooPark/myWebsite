'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { IconClose } from '../../../../public/svgs/icons'

export default function EditModalHeader() {
  const router = useRouter()

  return (
    <div className="flex justify-between p-4 text-beige-normal">
      <div className="font-point text-lg">Update</div>
      <button onClick={() => router.back()} className="size-5">
        <IconClose />
      </button>
    </div>
  )
}
