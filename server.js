const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const posts = require('./routes/post');

app.use(cors());

app.use('/posts',posts);



app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})