export class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.question = data.question
    this.content = data.content
    this.likes = data.likes
    this.alliance = data.alliance
    this.id = data.id
  }

  get Template() {
    return /* html */`
    <div class="row  card">
    <div class="row justify-content-between">
      <div class="col d-flex justify-content-start"><img src="${this.imgUrl}" width = "200px"alt="hero"></div>
      <div class="col d-flex justify-content-center">
       <h4 data-toggle="modal" data-target="#exampleModal" onclick = "app.postsController.showContent('${this.id}')">${this.question}</h4>
      </div>
      <div class="col d-flex justify-content-end">
        <button onclick="app.postsController.votePost(true)">+</button>
        <button onclick="app.postsController.votePost(false)">-</button>

      </div>
    </div>
  </div>   
 <!-- Modal  -->

    `
  }
}
