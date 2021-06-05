import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    console.log(res.data, 'get')
    ProxyState.posts = res.data.map(p => new Post(p))
    console.log(ProxyState.posts)
  }

  async createPost(postData) {
    console.log(postData)
    const res = await api.post('/api/posts', postData)
    console.log('created post', res)
    //   ProxyState.post = res.data
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    console.log(ProxyState.posts)
  }
}

export const postsService = new PostsService()
