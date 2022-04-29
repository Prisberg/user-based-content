import mongoose from 'mongoose';

const signupTemplate = new mongoose.Schema({
  username:{
    type: String,
    require: true,
    minlength:3,
    maxlength:20,
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
)

export default mongoose.model('Users', signupTemplate);
