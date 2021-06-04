import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'

class PostsService {
  createPost(postData) {
    ProxyState.posts = [...ProxyState.posts, new Post(postData)]
    console.log(ProxyState.posts)
  }
}

export const postsService = new PostsService()
