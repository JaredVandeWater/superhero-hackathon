export class CommentsController {
//   constructor() {

  //   }

  addComment(event, postId) {
    event.preventDefault()
    console.log(postId, 'postidcomment')
    const form = event.target
    form.reset()
  }
}
