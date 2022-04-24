const express = require('express');
const router = express.Router();
const signUpTemplate = require('../models/SignUpModels');
const bcrypt = require('bcrypt');



router.post('/', async (req, res) => {
 try {
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(req.body.password, salt);
   const user =  new signUpTemplate({

    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  })
   const newUser = await user.save()
    res.status(200).json(newUser)
 } catch (err) {
  res.status(500).json('error: ' + err.message)
}
})
// login


module.exports = router;