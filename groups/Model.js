'use strict';

var mongoose = require('mongoose');
module.exports = mongoose.model('Groups', require(groupsSchema));

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

module.exports = groupsSchema;
});
