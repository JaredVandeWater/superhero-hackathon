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
    console.log('Posts controller')
  }

  getPosts() {
    try {
      console.log('getposts')
      postsService.getPosts()
    } catch (error) {
      console.error(error)
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

  showContent(id) {
    const post = ProxyState.posts.find(p => p.id === id)
    document.getElementById('exampleModalLabel').innerText = post.question
    console.log(ProxyState.posts.find(p => p.id === id))

    document.getElementById('modalbody').innerText = post.content
    document.getElementById('addcomment').setAttribute('onSubmit', `app.commentsController.addComment(event, "${post.id}" `)
  }
}
