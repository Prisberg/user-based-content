import mongoose from 'mongoose';
import {IPost} from '../interfaces'
const postSchema = new mongoose.Schema(
{
  userId: { 
    type: String,
    required: true
  },
  description: {
    type: String,
    max: 500
  },
  img: {
    type: String,
  },

},
)
 const Post = mongoose.model<IPost>("Post", postSchema);

 export default Post

