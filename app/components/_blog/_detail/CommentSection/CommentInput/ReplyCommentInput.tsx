import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import Button from '@common/Button'
import usePostCommentMutation from '@/hooks/mutation/usePostCommentMutation'

interface ReplyCommentInputProps {
  postingId: string
  commentId: string
  setReplyMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ReplyCommentInput({
  postingId,
  commentId,
  setReplyMode,
}: ReplyCommentInputProps) {
  const { data: session } = useSession()

  const [text, setText] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setText(value)
  }

  const { mutation: postReplyCommentMutation } = usePostCommentMutation({
    session,
    postingId,
  })
  const postReplyComment = () => {
    if (!session) return
    postReplyCommentMutation.mutate(
      { postingId, commentId, text },
      {
        onSuccess: () => {
          setText('')
          setReplyMode(false)
        },
        onError: (error) => {
          toast.error(error.message)
        },
      },
    )
  }

  return (
    <div className="flex gap-2 py-3">
      <textarea
        cols={30}
        rows={3}
        placeholder={
          session ? '답글을 남겨보세요' : '로그인 후에 답글을 남겨보세요'
        }
        value={text}
        disabled={session ? false : true}
        className="w-full resize-none rounded border px-3 py-2 text-sm outline-none disabled:cursor-not-allowed"
        onChange={onChange}
      />
      <Button
        type="button"
        level="primary"
        size="s"
        label="답글 작성"
        className="w-24"
        onClick={postReplyComment}
        disabled={session ? false : true}
      />
    </div>
  )
}
