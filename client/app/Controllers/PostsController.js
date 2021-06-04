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

  getPosts() {
    console.log('getposts')
    postsService.getPosts()
  }

  createPost(event) {
    try {
      event.preventDefault()
      console.log('event created')
      const form = event.target
      const newPost = {
        imgUrl: form.imgUrl.value,
        question: form.question.value,
        content: form.content.value,
        likes: form.likes.value,
        alliance: form.alliance.value
      }
      form.reset()
      postsService.createPost(newPost)
    } catch (error) {
      console.log(error)
    }
  }
}
