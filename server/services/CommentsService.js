import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getOne(id) {
    return await dbContext.Comments.findById(id)
  }

  async getCommentsByPostId(postId) {
    return await dbContext.Comments.find({ postId }).populate('comments', 'id')
  }

  async create(commentData) {
    if (!commentData) { throw new BadRequest('Invalid comment data') }
    return await dbContext.Comments.create(commentData)
  }

  async update(id, commentData) {
    const comment = await dbContext.Comments.findByIdAndUpdate(id, commentData, { new: true, runValidators: true })
    return comment
  }

  async delete(commentId, userId) {
    await dbContext.Comments.findByIdAndRemove({ _id: commentId, creatorId: userId })
    return 'Successfully Deleted'
  }
}

export const commentsService = new CommentsService()
