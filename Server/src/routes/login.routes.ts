import mongoose from 'mongoose';
import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import User  from '../models/SignUpModels'

const loginRouter = Router();
// Passport 

loginRouter.post('/',  async (req :Request, res:Response) => {
  try {
        const user = await User.findOne({email: req.body.email,})
        !user && res.status(404).json('user not found')
    
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json('password not correct')
    
        res.status(200).json("success")
      } catch (err) {
        res.status(500).json('error: ' + err.message)
      }    })

export default loginRouter;