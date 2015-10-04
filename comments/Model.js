'use strict';

var mongoose = require('mongoose');

var commentsSchema =
  new mongoose.Schema({
      userId: {type: String, required: true},
      groupId: {type: String, required: true},
      isActive: {type: Boolean, default: true},
      createdOn: {type: Date, default: Date.now()},
      text: {type: String, required: true}
    },
    {collection: 'comments'});

commentsSchema.index({name: 1, createdBy: 1}, {unique: true});

module.exports = mongoose.model('Comment', require(commentsSchema));
