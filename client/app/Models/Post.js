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
        <h4 data-toggle="modal" data-target="#modal-${this.id}">${this.question}</h4>
        </div>
        <div class="col d-flex justify-content-end">
          <button onclick="app.postsController.votePost(true)">+</button>
          <button onclick="app.postsController.votePost(false)">-</button>
        </div>
      </div>
    </div>
    
 <!-- Modal  -->

 <div class="modal fade" id="modal-${this.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${this.question}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ${this.content}
        <form onsubmit="app.commentsController.addComment(event, '${this.id}')">
          <input type="text" id="comment" placeholder="New comment...">
          <button type="submit">Comment</button>
        </form>
        <button type="button" class="btn btn-primary" onclick="app.commentsController.showComments('${this.id}')">Show Comments</button>
        <div id="comment-display">
        </div>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
      
    </div>
  </div>   
 <!-- Modal  -->
 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p id="modalbody"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <form onsubmit="" id="addcomment">
            <input type="text" placeholder="New Comment...">
            <button type="submit">comment<button>
          </form>
        </div>
      </div>
    </div>
  </div>

    `
  }
}
