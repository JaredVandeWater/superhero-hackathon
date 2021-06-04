import { dev } from './env.js'
// eslint-disable-next-line no-unused-vars
import { Post } from './Models/Post.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  // NOTE //
  /** @type {Post[]} */

    posts = []
  user = {}
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  socketData = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
