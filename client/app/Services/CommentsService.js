import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
import { Comment } from '../Models/Comment.js'

class CommentsService {
  async addComment(commentData) {
    const res = await api.post('/api/comments', commentData)
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }

  async showComments(postId) {
    const res = await api.get('/api/comments/post/' + postId)
    ProxyState.comments = res.data.map(c => new Comment(c))
    console.log(ProxyState.comments)
  }
}

export const commentsService = new CommentsService()
