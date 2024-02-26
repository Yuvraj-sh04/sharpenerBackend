const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const db = require('./util/database');

const errorController = require('./controllers/error');

app.use(express.static('static'))

const login = require('./routes/login');
const contact = require('./routes/contact');
const shop = require('./routes/shop');

app.use('/contact',contact);

app.use('/login',login);

app.use('/', shop);

app.use(errorController.error);

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`);
})