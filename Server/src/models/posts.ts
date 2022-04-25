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

module.exports = mongoose.model('Post', postSchema)
