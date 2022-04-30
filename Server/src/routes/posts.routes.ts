import express, { Request, Response, Router  } from 'express';
import Post from '../models/posts';
import User from '../models/SignUpModels';



const postsRouter = Router();

// Get All posts 
postsRouter.get('/', async (req :Request, res:Response) => {

  const posts =  Post.find((err: any, posts: any) => {
    console.log(posts);
    
    if (err) {
      res.send("Error!");
    } else {
      res.send(posts);
    }
  });
})
//  get a post
postsRouter.get('/profile/:userId', async (req :Request, res:Response) => {

  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    console.log(currentUser);
    
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
})
//  Creat a New Post
postsRouter.post('/', async (req :Request, res:Response) => {
  const newPost =  new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
} catch (err) {
  res.status(500).json(err)
  }
})

// Edit a post
postsRouter.put('/:id', async (req :Request, res:Response) => {

    try {
    const post = await Post.findById(req.params.id);
    if (post?.userId === req.body.userId) {
      await post?.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }

 })

// Delete a post
postsRouter.delete('/:id', async (req :Request, res:Response) => {
  try { 
    const post = await  Post.findById(req.params.id);
 if (post?.userId === req.body.userId) {
   await post?.deleteOne({$set:req.body})
   res.status(200).json('Post has been deleted successfully');

 } else {
   res.status(403).json('you cant delete this corse')
 }
 } catch (err) {
  res.status(500).json('error: ' + err.message)
 }
})

export default postsRouter;