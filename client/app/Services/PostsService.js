import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getPosts() {
    try {
      const res = await api.get()
      console.log(res.data, 'returned posts')
      ProxyState.posts = res.data
    } catch (error) {
      console.log(error)
    }
  }

  async createPost(postData) {
    try {
      const res = await api.post('/api/posts', ProxyState.posts)
      console.log('created post', res)
      //   ProxyState.post = res.data
      ProxyState.posts = [...ProxyState.posts, new Post(postData)]
      console.log(ProxyState.posts)
    } catch (error) {
      console.log(error)
    }
  }
}

export const postsService = new PostsService()
