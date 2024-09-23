const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Database Connection code 
const URI = process.env.ATLAS_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if(err) throw err;
  console.log('Successfully DataBase Connected')
});

//routes 
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.use('/users', usersRouter);
app.use('/posts', postsRouter);





app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});