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
  app.get('/groups/:id', function (req, res) {
    res.send('group by Id');
  });

  // membership routes
  app.get('/groups/:id/memberships', function (req, res) {
    res.send('memberships by groupId');
  });
  app.get('/users/:id/memberships', function (req, res) {
    res.send('memberships by userId');
  });

  // user routes
  app.get('/users/:id', function (req, res) {
    res.send('user by Id');
  });

  // game routes
  app.get('/games/:id', function (req, res) {
    res.send('gameById');
  });
  app.get('/groups/:id/games', function (req, res) {
    res.send('games by groupId!');
  });

  // comments
  app.get('/groups/:id/comments', function (req, res) {
    res.send('comments by groupId');
  });
  app.get('/users/:id/comments', function (req, res) {
    res.send('comments by userId');
  });
})();
