var cloudinary = require('cloudinary');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// set config variables
var configs = require('./config/config.js');
configs.setConfigs();

var port = process.env.PORT || 8080;
