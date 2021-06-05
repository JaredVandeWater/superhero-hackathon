import { commentsService } from '../Services/CommentsService.js'
import { ProxyState } from '../AppState.js'

function _drawComments() {
  let template = ''
  ProxyState.comments.forEach(c => {
    template += c.Template
  })
  document.getElementById('comment-display').innerHTML = template
}

export class CommentsController {
  constructor() {
    ProxyState.on('comments', _drawComments)
  }

  addComment(event, thisPostId) {
    const form = event.target
    event.preventDefault()
    const newComment = {
      postId: thisPostId,
      content: form.comment.value
    }
    try {
      commentsService.addComment(newComment)
    } catch (error) {
      throw new Error(error)
    }
    form.reset()
  }

  async showComments(postId) {
    try {
      await commentsService.showComments(postId)
      _drawComments()
    } catch (error) {
      throw new Error(error)
    }
  }
}
