const router = require('express').Router();
const bcrypt = require('bcrypt');
const signUpTemplate = require('../models/SignUpModels');


//update user
router.put('/:id', async (req, res) => {
  if(req.body.userId === req.params.id) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt)
        } catch (err) {
          return res.status(500).json(err)
        }
      }
      try {
        const user = await signUpTemplate.findByIdAndUpdate(req.params.id, { 
          $set: req.body
        });
        res.status(200).json('Account has been updated')
      } catch (err) {
        res.status(500).json('error: ' + err.message)
      }
    } else {
      return res.status(403).json('can not update ')
    }
})

module.exports = router;
