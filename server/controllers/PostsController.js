import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const posts = await postsService.getAll(req.query)
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const postData = req.body
      postData.creatorId = req.userInfo.id
      const post = await postsService.create(postData)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id
      const post = await postsService.update(id, req.body)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const post = await postsService.delete(req.params.id, req.userInfo.id)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
}
