import { cache } from 'react'
import { PostingType } from '../../interfaces/interface'
import { connectMongo } from '../../lib/database'
import { Posting } from '../../../models/posting'

export default cache(async function getAllListingCount() {
  try {
    await connectMongo()
    const listingCount = await Posting.find<PostingType>({}).countDocuments()

    return listingCount
  } catch (error) {
    return 0
  }
})
