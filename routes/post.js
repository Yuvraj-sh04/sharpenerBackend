const express = require('express');
const route = express.Router();
const postRequest = require('../controllers/postRequest');
const getRequest = require('../controllers/getRequest');

const bodyParser = require("body-parser");
route.use(bodyParser.urlencoded({ extended: false }));

route.post('/',postRequest.createPost);
route.get('/',getRequest.takePost);




module.exports = route;