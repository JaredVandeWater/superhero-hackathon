import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _draw() {
  let template = ''
  ProxyState.posts.forEach(p => {
    template += p.Template
  })
}

export class PostsController {
  constructor() {
    ProxyState.on('posts', _draw)
    console.log('Posts controller')
  }

  createPost(event) {
    try {
      event.preventDefault()
      console.log('event created')
      const form = event.target
      const newPost = {
        alliance: form.alliance.value,
        imgUrl: form.imgUrl.value,
        question: form.question.value,
        content: form.content.value
      }
      form.reset()
      postsService.createPost(newPost)
    } catch (error) {
      console.log(error)
    }
  }
}
