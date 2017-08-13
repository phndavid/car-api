'use strict';
// Load config modules
//const initDB = require('./config/db/inicialize.js');
const config = require('./config/config.js');
// Load Express module for API functions
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const router = express.Router()
// Load controllers
const userController = require('./api/controllers/UserController.js');
// Port for express web app
const port =  config.server.port

const connection = mysql.createConnection({
  host: "13.58.163.179",
  user: "username",
  password: "password",
  database : 'carhola'
});
connection.connect();

// Configure Express web server to handle POST request's, encoding and cross site requests
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.all("/api/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    return next();
});

// Set the app to listen in the specific port
app.listen(port, () => {});

router.post('/auth/signin', (req, res) => {
  userController.signin(req,res, connection);
});

router.get('/users', (req, res) => {


});

router.get('/devices', (req, res) => {

});

//Express app uses the router's set ups
app.use('/api/v1.0',router);
