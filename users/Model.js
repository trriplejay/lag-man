'use strict';

var mongoose = require('mongoose');


var usersSchema =
  new mongoose.Schema({
      userName: {type: String, required: true},
      email: {type: String, required: true},
      firstName: {type: String, default: ''},
      lastName: {type: String, default: ''},
      homeAddress: {type: String, default: ''},
      homeState: {type: String, default: ''},
      homeZip: {type: String, default: ''},
      workAddress: {type: String, default: ''},
      workState: {type: String, default: ''},
      workZip: {type: String, default: ''},
      phoneNumber: {type: String, default: ''},
      created: {type: Date, default: Date.now},
      updated: {type: Date, default: Date.now},
      createdBy: {type: String, required: true},
      updatedBy: {type: String, required: true}
    },
    {collection: 'users'});

groupsSchema.index({userName: 1}, {unique: true});
groupsSchema.index({email: 1}, {unique: true});

module.exports = mongoose.model('User', require(usersSchema));
