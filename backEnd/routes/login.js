const router = require('express').Router();
const signUpTemplate = require('../models/SignUpModels');
const bcrypt = require('bcrypt');

router.post("/", async (req, res) => {
  try {
    const user = await signUpTemplate.findOne({email: req.body.email,})
    !user && res.status(404).json('user not found')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json('password not correct')

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json('error: ' + err.message)
  }
})

module.exports = router;