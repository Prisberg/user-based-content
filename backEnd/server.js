const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes')


dotenv.config()
mongoose.connect(process.env.DB_ACCESS, () => console.log('DB connoted'))

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
// app.use("/", express.static("public"));

app.listen(port, () => {console.log('app is running on port:' + port)}); 
