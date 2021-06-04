import { AuthController } from './Controllers/AuthController.js'
import { PostsController } from './Controllers/PostsController.js'
import { SocketTestController } from './Controllers/SocketTestController.js'
import { ValuesController } from './Controllers/ValuesController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  socketTestController = new SocketTestController()
  postsController = new PostsController()
}

// @ts-ignore
window.app = new App()
