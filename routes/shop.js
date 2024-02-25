const express = require('express');
const app = express();
const path = require('path');
const route = express.Router();

const bodyParser = require("body-parser");
route.use(bodyParser.urlencoded({ extended: false }));

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views', 'shop.html'));
})

module.exports = route;