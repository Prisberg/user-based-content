const mongoose = require('mongoose');

const signupTemplate = new mongoose.Schema({
  username:{
    type: String,
    require: true,
    min:3,
    max:20,
    unique: true
  },
  email:{  
    type: String,
    require: true,
    max:50,
    unique: true
},
  password: { 
    type: String,
    require: true,
    min:6,
},
  profilePic: {
    type: String,
    default: '',
},
  isAdmin: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now()
  }
},
{ timestamp: true}
)

module.exports = mongoose.model('Users', signupTemplate)
