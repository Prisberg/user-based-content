import mongoose from 'mongoose';
import express, { Request, Response, NextFunction, Router } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
const Port = 3000;
import User  from './models/SignUpModels'
import usersRouter from './routes/register.routes';
import loginRouter from './routes/login.routes';

dotenv.config();
const routes = Router();

mongoose.connect(
    `${process.env.DB_ACCESS}`,() =>
    console.log('DB connoted')
  )

  const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
  );
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());


//Routes 
routes.use('/api/register', usersRouter)
routes.use('/api/login', loginRouter)


app.listen(Port, () => {
  console.log("Server Started");
});