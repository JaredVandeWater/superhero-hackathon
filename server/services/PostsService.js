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
}

export const postsService = new PostsService()
