'use strict';

var model = require('./Model.js');

module.exports = post;

function post(req, res) {
  var newGroup = new model(req.body);
  newGroup.save(function (err, result) {
    console.log(err);
    if (err)
      return res.status('500').send({msg: 'encountered an error', error: err});
    return res.status('200').send(newGroup);
  });
}
