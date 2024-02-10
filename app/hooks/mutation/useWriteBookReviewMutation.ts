import { BookReviewFormDataType } from '@/interfaces/interface'
import { useMutation } from '@tanstack/react-query'

interface WriteBookReviewParams {
  data: BookReviewFormDataType
}

const writeBookReview = async ({ data }: WriteBookReviewParams) => {
  await fetch('/api/book', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.error) {
        throw new Error(result.error)
      }
    })
}

export default function useWriteBookReviewMutation() {
  const mutation = useMutation({
    mutationFn: ({ data }: WriteBookReviewParams) => writeBookReview({ data }),
    onSuccess: () => {},
  })

  return { mutation }
}
