export class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.question = data.question
    this.content = data.content
    this.likes = data.likes
    this.alliance = data.alliance
  }

  get Template() {
    return /* html */`
     <p>This is my post template<p>
     `
  }
}
