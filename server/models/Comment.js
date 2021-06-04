import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  postId: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 }
},
{ timestamps: true, toJSON: { virtuals: true } }
)

export default CommentSchema
