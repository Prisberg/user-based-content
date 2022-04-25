import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import User  from '../models/SignUpModels'

const signupRouter = Router();

signupRouter.post('/', async (req :Request, res:Response) => {
  const { username, password, email } = req?.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    })
    await newUser.save();
    res.status(200).json(newUser)
  } catch (err) {
    res.status(500).json('error: ' + err.message)
  }
  

})

export default signupRouter;
