import mongoose from 'mongoose';
import express, { Request, Response, Router  } from 'express';
import bcrypt from 'bcryptjs';
import User  from '../models/SignUpModels'
import passport from 'passport';
import passportLocal from 'passport-local';
import { UserInterface, DbUserInterface } from '../interfaces';

const LocalStrategy = passportLocal.Strategy
const loginRouter = Router();
// Passport 
passport.use(new LocalStrategy((username: string, password: string, done) => {
  User.findOne({ username: username }, (err: Error, user: DbUserInterface) => {
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
passport.serializeUser((user: DbUserInterface, cb) => {
  cb(null, user._id);
});
loginRouter.post('/',  passport.authenticate("local"), async (req :Request, res:Response) => {
         res.status(200).json("success")
    })

export default loginRouter;