var React = require('react'),
    VoteCountStore = require('../stores/VoteStore'),
    VoteActions = require('../actions/VoteActions.js');

var VoteButtons = React.createClass({

  upVote: function(){
    VoteActions.upVote();
  },

  downVote: function(){
    VoteActions.downVote();
  },

  render: function(){

    return (
      <div id="vote">
        <button id="upVote" className="button" onClick={this.upVote}>Upvote</button>
        <button id="downVote" className="button" onClick={this.downVote}>Downvote</button>
      </div>

    );

  }
});

module.exports = VoteButtons;
