import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    console.log(res.data, 'get')
    ProxyState.posts = res.data
  }

  async createPost(postData) {
    const res = await api.post('/api/posts', ProxyState.posts)
    console.log('created post', res)
    //   ProxyState.post = res.data
    ProxyState.posts = [...ProxyState.posts, new Post(postData)]
    console.log(ProxyState.posts)
  }
}

export const postsService = new PostsService()
