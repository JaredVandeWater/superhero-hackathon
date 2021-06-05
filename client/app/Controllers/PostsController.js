import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _draw() {
  let template = ''
  ProxyState.posts.forEach(p => {
    template += p.Template
  })
  document.getElementById('postsHTML').innerHTML = template
}

export class PostsController {
  constructor() {
    this.getPosts()
    ProxyState.on('posts', _draw)
  }

  getPosts() {
    try {
      postsService.getPosts()
    } catch (error) {
      throw new Error(error)
    }
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
        alliance: form.alliance.value
      }
      form.reset()
      postsService.createPost(newPost)
    } catch (error) {
      console.error(error)
    }
  }
}
