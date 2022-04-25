import mongoose from 'mongoose';

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


export default mongoose.model('Post', postSchema);

