const mongoose = require('mongoose');

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
{ timestamp: true}
)

module.exports = mongoose.model('Post', postSchema)
