import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
  async getAll(query = {}) {
    return await dbContext.Posts.find(query)
  }

  async create(postData) {
    if (!postData) { throw new BadRequest('Invalid post data') }
    return await dbContext.Posts.create(postData)
  }

  async update(id, postData) {
    const post = await dbContext.Posts.findByIdAndUpdate(id, postData, { new: true, runValidators: true })
    return post
  }

  async delete(postId, userId) {
    await dbContext.Posts.findByIdAndRemove({ _id: postId, creatorId: userId })
    return 'Successfully Deleted'
  }
}

export const postsService = new PostsService()
