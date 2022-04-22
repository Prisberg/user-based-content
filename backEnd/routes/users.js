const router = require('express').Router();


router.get('/',  (req, res) => {
  res.send('welcome users')
})

module.exports = router;