import useDeleteCommentMutation from '@/hooks/mutation/useDeleteCommentMutation'
import { useConfirmModalContentActions } from '@/hooks/store/useConfirmModalContentStore'
import { useConfirmModalDisplayActions } from '@/hooks/store/useConfirmModalDisplayStore'
import { useSession } from 'next-auth/react'
import React from 'react'
import { toast } from 'react-toastify'

interface CommentDeleteButtonProps {
  postingId: string
  commentId: string
  userId: string
}

export default function CommentDeleteButton({
  postingId,
  commentId,
  userId,
}: CommentDeleteButtonProps) {
  const { data: session } = useSession()
  const { onOpen: openDeleteCommentModal, onClose: closeDeleteCommentModal } =
    useConfirmModalDisplayActions()
  const { onChange: changeModalContent } = useConfirmModalContentActions()

  const { mutation: deleteCommentMutation } = useDeleteCommentMutation({
    session,
    postingId,
  })

  const deleteComment = () => {
    if (!session || session.user.id !== userId) return

    deleteCommentMutation.mutate(
      {
        postingId,
        commentId,
        type: 'origin',
      },
      {
        onSuccess: () => {
          closeDeleteCommentModal()
        },
        onError: (error) => {
          toast.error(error.message)
        },
      },
    )
  }

  const handleModal = () => {
    changeModalContent({
      title: '삭제',
      description: '댓글을 삭제하시겠습니까?',
      action: () => deleteComment(),
      actionLabel: '삭제',
    })
    openDeleteCommentModal()
  }

  return <button onClick={handleModal}>삭제</button>
}
