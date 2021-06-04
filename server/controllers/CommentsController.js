import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('/:id', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.delete)
  }

  async getOne(req, res, next) {
    try {
      const comment = await commentsService.getOne(req.params.id)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const commentData = req.body
      commentData.creatorId = req.userInfo.id
      const comment = await commentsService.create(req.body)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id
      const comment = await commentsService.update(id, req.body)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const comment = await commentsService.delete(req.params.id, req.userInfo.id)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}
