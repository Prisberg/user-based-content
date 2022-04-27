import mongoose from 'mongoose';
import express, { Request, Response, NextFunction, Router } from 'express';
import cors from 'cors';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
const Port = 4000;
import User  from './models/SignUpModels'
import signupRouter from './routes/register.routes';
import loginRouter from './routes/login.routes';
import postsRouter from './routes/posts.routes';
import usersRouter from './routes/users.routes';
import cookieParser from 'cookie-parser';

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
    app.use(cookieParser());


//Routes 
routes.use('/register', signupRouter)
routes.use('/login', loginRouter)
routes.use('/posts', postsRouter)
routes.use('/user', usersRouter)


app.get("/logout", (req, res) => {
  req.logout();
  res.send("success")
});

app.listen(Port, () => {
  console.log("Server Started");
});