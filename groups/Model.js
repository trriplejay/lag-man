'use strict';

var mongoose = require('mongoose');

var groupsSchema =
  new mongoose.Schema({
      name: {type: String, required: true},
      created: {type: Date, default: Date.now},
      updated: {type: Date, default: Date.now},
      createdBy: {type: String, required: true},
      updatedBy: {type: String, required: true}
    },
    {collection: 'groups'});

groupsSchema.index({name: 1, createdBy: 1}, {unique: true});

module.exports = mongoose.model('Group', groupsSchema);
