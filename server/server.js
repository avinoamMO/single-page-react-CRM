// Include packages:
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');

// db setup:
mongoose.connect('mongodb://localhost/iCRM')
const Schema = mongoose.Schema

//Server setup;
const app = express();
const api = require("./routes/api")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
  })

app.use("/", api)
  
app.listen(process.env.PORT || 8080, function () {
    console.log(`server up @ :`+ PORT)
});


