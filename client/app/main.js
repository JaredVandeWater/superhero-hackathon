import { AuthController } from './Controllers/AuthController.js'
import { PostsController } from './Controllers/PostsController.js'
import { SocketTestController } from './Controllers/SocketTestController.js'
import { ValuesController } from './Controllers/ValuesController.js'
import { CommentsController } from './Controllers/CommentsController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  socketTestController = new SocketTestController()
  postsController = new PostsController()
  commentsController = new CommentsController()
}

// @ts-ignore
window.app = new App()
