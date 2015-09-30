'use strict';

var mongoose = require('mongoose');
module.exports = mongoose.model('Games', require(gamesSchema));

var gameModes = [
  'STD',
  'FFA',
  'TDM',
  'VIP',
  'ZOM'
];

var gamesSchema =
  new mongoose.Schema({
      groupId: {type: String, required: true},
      isActive: {type: Boolean, default: false},
      livingPlayers: {type: Array, default: []},
      deadPlayers: {type: Array, default: []},
      houseRules: {type: String},
      isCompleted: {type: Boolean, default: false},
      isCancelled: {type: Boolean, default: false},
      startedOn: {type: Date},
      finishedOn: {type: Date},
      gameMode: {type: String, enum: gameModes}
      name: {type: String, required: true},
      created: {type: Date, default: Date.now},
      updated: {type: Date, default: Date.now},
      createdBy: {type: String, required: true},
      updatedBy: {type: String, required: true}
    },
    {collection: 'groups'});
});

module.exports = groupsSchema;
