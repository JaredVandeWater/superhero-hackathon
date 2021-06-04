import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    // get userId in frontend from
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    imgUrl: { type: String, required: true },
    question: { type: String, required: true },
    content: { type: String, required: true },
    alliance: { type: String, default: 'off' },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default PostSchema
