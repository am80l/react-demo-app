var AppDispatcher = require('../dispatcher/AppDispatcher'),
    VoteConstants = require('../constants/VoteConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _votes = 0; // votes

/**
 * Upvote
 */

function upVote() {
  _votes = _votes + 1;
}

/**
 * Downvote
 */

function downVote() {
  _votes = _votes - 1;
}

var VoteCountStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the total of Votes.
   * @return int
   */
  getCount: function() {
    return _votes;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case VoteConstants.GET_COUNT:
        upVote();
        VoteCountStore.emitChange();
        break;
      case VoteConstants.VOTE_UP:
        upVote();
        VoteCountStore.emitChange();
        break;
      case VoteConstants.VOTE_DOWN:
        downVote();
        VoteCountStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = VoteCountStore;
