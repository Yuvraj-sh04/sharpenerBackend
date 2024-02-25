const express = require('express');
const app = express();
const path = require('path');
const route = express.Router();

const bodyParser = require("body-parser");
route.use(bodyParser.urlencoded({ extended: false }));

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views', 'contact.html'));
})

route.post('/auth', (req,res)=>{
    let name = req.body.name;
    console.log(name);
    let email = req.body.email;
    console.log(email);
    res.redirect('../');
})

module.exports = route;