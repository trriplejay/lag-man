'use strict';

var express = require('express');
var mongoose = require('mongoose');

global.async = require('async');
global._ = require('underscore');

var app = express();

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app is lisening at http://%s:%s', host, port);
});


(function loadRoutes() {
  // group routes
  app.get('/groups', function (req, res) {
    res.send('Groups!');
  });

  // membership routes

  // user routes
})();