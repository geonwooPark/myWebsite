export type OAuthType = 'google' | 'github'

export interface UserType {
  _id: string
  name: string
  email: string
  image: string
  role: string
}

export interface PostingType {
  _id: string
  category: string
  title: string
  description: string
  thumbnailURL: string
  content: string
  views: number
  createdAt: Date
  updatedAt: Date
}

export type OmittedPostingType = Omit<
  PostingType,
  '_id' | 'createdAt' | 'updatedAt' | 'views'
>

export interface CommentUserType {
  commentId: string
  userImage: string
  userId: string
  userName: string
  createdAt: Date
  text: string
}

export interface ReplyCommentUserType {
  commentId: string
  replyCommentId: string
  userImage: string
  userId: string
  userName: string
  createdAt: Date
  text: string
}

export interface CommentType {
  _id: string
  postingId: string
  title: string
  user: CommentUserType[]
  createdAt: Date
  updatedAt: Date
}

export interface ReplyCommentType {
  _id: string
  postingId: string
  title: string
  user: ReplyCommentUserType[]
  createdAt: Date
  updatedAt: Date
}

export interface LikeType {
  createdAt: string
  postingId: string
  title: string
  updatedAt: string
  userId: string[]
  count: number
  _id: string
}

export interface GetListingType {
  listing: PostingType[]
  listingCount: number
}

export interface ImageType {
  path: string
  url: string
}

export interface CheckListType {
  date: string
  list: CheckListItemType[]
}

export interface CheckListItemType {
  listId: string
  text: string
  status: boolean
}

export interface MyCommentType {
  title: string
  postingId: string
  commentId: string
  userImage: string
  userId: string
  userName: string
  createdAt: Date
  text: string
}

export interface GPTChatType {
  id: number
  content: string
  sender: string
}

export interface HotPlaceFormDataType {
  images: File[]
  store: string
  category: string
  rating: number
  address: string
  hashtags: string[] | null
  coordinate: {
    latitude: number
    longitude: number
  }
  description: string
}

export interface HotPlaceListingType {
  _id: string
  category: string
  store: string
  address: string
  si: string
  gu: string
  description: string
  rating: number
  images: {
    path: string
    url: string
  }[]
  hashtags: string[] | null
  creator: string
  coordinate: {
    latitude: number
    longitude: number
  }
}

export interface BookReviewFormDataType {
  recommended: boolean
  title: string
  description: string
  authors: string[]
  thumbnail: string
  content: string
  category: string
}

export interface BookReviewType {
  _id: string
  recommended: boolean
  title: string
  description: string
  authors: string[]
  thumbnail: string
  content: string
  category: string
}
