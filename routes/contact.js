const express = require('express');
const app = express();
const path = require('path');
const route = express.Router();
const contactController = require('../controllers/contact');

const bodyParser = require("body-parser");
route.use(bodyParser.urlencoded({ extended: false }));

route.get('/',contactController.getFile);

route.post('/auth', contactController.postFile);

module.exports = route;