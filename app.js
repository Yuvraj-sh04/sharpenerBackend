const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('static'))

const login = require('./routes/login');
const contact = require('./routes/contact');
const shop = require('./routes/shop');

app.use('/contact',contact);

app.use('/login',login);

app.use('/', shop);

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'views', '404.html'))
})

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`);
})