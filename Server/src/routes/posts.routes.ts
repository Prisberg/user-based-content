import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import PostModel  from '../models/posts'


const postsRouter = Router();
postsRouter.post('/', async (req :Request, res:Response) => {
  const newPost =  new PostModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
} catch (err) {
  res.status(500).json(err)
  }
})


export default postsRouter;