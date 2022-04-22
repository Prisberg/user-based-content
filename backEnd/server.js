const express = require('express');
const app = express();
const cors = require('cors');
const port = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const registerRoutes = require('./routes/register')
const usersRoutes = require('./routes/users')
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config()
mongoose.connect(
  process.env.DB_ACCESS,
 
  () => {
  console.log('DB connoted')
}
);

app.use(express.json());
app.use(cors());


app.use("/api/register", registerRoutes);
app.use("/api/users", usersRoutes);

app.listen(port, () => {console.log('app is running on port:' + port)}); 
