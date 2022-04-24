const router = require('express').Router();
const PostModel = require('../models/posts');


// create a new post
router.post('/', async (req, res) => {
  const newPost =  new PostModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
})
// update a post
router.put('/:id', async (req, res) => {
   try { 
     const post = await  PostModel.findById(req.params.id);
  if (post.userId === req.body.userId) {
    await post.updateOne({$set:req.body})
    res.status(200).json('Post has been updated successfully');

  } else {
    res.status(403).json('you cant update this corse')
  }
  } catch (err) {
   res.status(500).json('error: ' + err.message)
  }
})

// delete a post
router.delete('/:id', async (req, res) => {
  try { 
    const post = await  PostModel.findById(req.params.id);
 if (post.userId === req.body.userId) {
   await post.deleteOne({$set:req.body})
   res.status(200).json('Post has been deleted successfully');

 } else {
   res.status(403).json('you cant delete this corse')
 }
 } catch (err) {
  res.status(500).json('error: ' + err.message)
 }
})

// get a  post
router.get('/:id', async (req, res) => {
  try {
    const post = await  PostModel.findById(req.params.id);
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json('error: ' + err.message)
  }
});
// get all  posts
router.get('/posts', async (req, res) => {
  
});
module.exports = router;
