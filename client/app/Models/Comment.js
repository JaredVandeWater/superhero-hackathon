export class Comment {
  constructor(data) {
    this.creatorId = data.creatorId
    this.postId = data.postId
    this.content = data.content
    this.likes = data.likes
  }

  get Template() {
    return /* html */`
    <p>${this.content}</p>
    `
  }
}
