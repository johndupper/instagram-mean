var cloudinary = require('cloudinary');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// set config variables
var configs = require('./config/config.js');
configs.setConfigs();

mongoose.connect(process.env.MONGO_CONNECT)

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('server running on port: ' + PORT);
});