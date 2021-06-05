import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    ProxyState.posts = res.data.map(p => new Post(p))
  }

  async createPost(postData) {
    const res = await api.post('/api/posts', postData)
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
  }
}

export const postsService = new PostsService()
