var VoteConstants = require('../constants/VoteConstants'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

var VoteActions = {

  upVote: function() {
    AppDispatcher.handleViewAction({
      actionType: VoteConstants.VOTE_UP,
    });
  },

  downVote: function() {
    AppDispatcher.handleViewAction({
      actionType: VoteConstants.VOTE_DOWN,
    });
  },

};

module.exports = VoteActions;
