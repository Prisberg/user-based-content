import mongoose from 'mongoose';
import express, { Request, Response, NextFunction, Router } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import User from './models/SignUpModels'
import dotenv from 'dotenv';
import { UserInterface, DbUserInterface } from './Interfaces';
const port = 4000;


import postsRouter from './routes/posts.routes';
const routes = Router();



const myStrategy = passportLocal.Strategy
dotenv.config();
mongoose.connect(
  `${process.env.DB_ACCESS}`,(err) => {
    if (err) throw err;
    console.log("Connected To Mongo")
  });
  
  // Middleware
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
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(routes);
    // Passport 
    passport.use(new myStrategy((username: string, password: string, done) => {
      User.findOne({ username: username }, (err: any, user: DbUserInterface) => {
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

passport.deserializeUser((id: string, cb) => {
  User.findOne({ _id: id }, (err: any, user: DbUserInterface) => {
    const userInformation: UserInterface = {
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      id: user._id
    };
    cb(err, userInformation);
  });
});


// Routes
app.post('/register', async (req :Request, res:Response) => {
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

});
app.post("/login", passport.authenticate("local"), (req :Request, res:Response) => {
  res.send("success")
});

//  get the user that is logged in
app.get("/user", (req :Request, res:Response) => {
  res.send(req.user);
});

app.get("/logout", (req :Request, res:Response) => {
  req.logout();
  res.send("success")
});

routes.use('/posts', postsRouter)




app.listen(port, () => {
  console.log("Server Started");
});









// import mongoose from 'mongoose';
// import express, { Request, Response, NextFunction, Router } from 'express';
// import cors from 'cors';
// import session from 'express-session';
// import bcrypt from 'bcryptjs';
// import dotenv from 'dotenv';
// const Port = 4000;
// import User  from './models/SignUpModels'
// import signupRouter from './routes/register.routes';
// import loginRouter from './routes/login.routes';
// import postsRouter from './routes/posts.routes';
// import usersRouter from './routes/users.routes';
// import cookieParser from 'cookie-parser';

// dotenv.config();

// const routes = Router();


// mongoose.connect(
//     `${process.env.DB_ACCESS}`,() =>
//     console.log('DB connoted')
//   )


//   const app = express();
//   app.use(express.json());
//   app.use(cors({ origin: "http://localhost:3000", credentials: true }))
//   app.use(
//     session({
//       secret: "secretcode",
//       resave: true,
//       saveUninitialized: true,
//     })
//     );
//     app.use(routes);
//     app.use(cookieParser());


// //Routes 
// routes.use('/register', signupRouter)
// routes.use('/login', loginRouter)
// routes.use('/posts', postsRouter)
// routes.use('/user', usersRouter)


// app.get("/logout", (req, res) => {
//   req.logout();
//   res.send("success")
// });

// app.listen(Port, () => {
//   console.log("Server Started");
// });