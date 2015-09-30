'use strict';

var mongoose = require('mongoose');
module.exports = mongoose.model('Memberships', require(membershipsSchema));

var membershipsSchema =
  new mongoose.Schema({
      userId: {type: String, required: true},
      groupId: {type: String, required: true},
      isModerator: {type: Boolean, default: false},
      joinedOn: {type: Date},
      approvedByUserId: {type: String, required: true},
      isActive: {type: Boolean, default: true},
      isApproved: {type: Boolean, default: false},
      gameRecord: {
        gameWon: {type: Number, default: 0},
        gamesPlayed: {type: Number, default: 0},
        gamesDropped: {type: Number, default: 0},
        deaths: {type: Number, default: 0}
      }
    },
    {collection: 'memberships'});
});

membershipsSchema.index({userId: 1, groupId: 1}, {unique: true});

module.exports = membershipsSchema;
