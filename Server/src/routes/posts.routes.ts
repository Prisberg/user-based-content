import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import postSchema  from '../models/posts'
import Post from '../models/posts';



const postsRouter = Router();

// Get All posts 
postsRouter.get('/',  (req :Request, res:Response) => {

  const posts = Post.find((err: any, posts: any) => {
    console.log(posts);
    
    if (err) {
      res.send("Error!");
    } else {
      res.send(posts);
    }
  });
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
postsRouter.put('/:id',  (req :Request, res:Response) => {

    const post =   Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, book: any) => {
        if (err) {
          res.status(500).json('error: ' + err.message);
        } else {
          res.status(200).json('Post has been updated successfully');

        }
      }
      );

 })

// Delete a post
postsRouter.delete('/:id', async (req :Request, res:Response) => {
  try { 
    const post = await  Post.findById(req.params.id);
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

export default postsRouter;