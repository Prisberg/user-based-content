import mongoose from 'mongoose';
import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import User  from '../models/SignUpModels'
import passport from 'passport';
import passportLocal from 'passport-local';

const loginRouter = Router();
// Passport 
passport.use(new LocalStrategy((username: string, password: string, done) => {
  User.findOne({ username: username }, (err, user: DatabaseUserInterface) => {
    if (err) throw err;
    if (!user) return done(null, false);
    bcrypt.compare(password, user.password, (err, result: boolean) => {
      if (err) throw err;
      if (result === true) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
})
);
loginRouter.post('/', async (req :Request, res:Response) => {
  // try {
  //       const user = await User.findOne({email: req.body.email,})
  //       !user && res.status(404).json('user not found')
    
  //       const validPassword = await bcrypt.compare(req.body.password, user.password)
  //       !validPassword && res.status(400).json('password not correct')
  //       res.status(200).json(user)
  //     } catch (err) {
  //       res.status(500).json('error: ' + err.message)
  //     }
    })

export default loginRouter;