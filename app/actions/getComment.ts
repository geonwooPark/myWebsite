import { Comment } from '@/models/comment'
import { CommentType } from '../interfaces/interface'
import { connectMongo } from '../utils/database'

export default async function getComment(postingId: string) {
  try {
    await connectMongo()
    const comment = await Comment.findOne<CommentType>({ postingId })

    if (comment) {
      return comment.user
    } else {
      return []
    }
  } catch (error) {
    return []
  }
}
