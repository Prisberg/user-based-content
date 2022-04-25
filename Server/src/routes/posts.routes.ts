import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import PostModel  from '../models/posts'


const postsRouter = Router();

//  Creat a New Post
postsRouter.post('/', async (req :Request, res:Response) => {
  const newPost =  new PostModel(req.body);
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




export default postsRouter;