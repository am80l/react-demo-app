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
      <div id="vote" className="btn-group btn-group-lg">
        <button id="upVote" className="btn btn-default" onClick={this.upVote}>Upvote</button>
        <button id="downVote" className="btn btn-default" onClick={this.downVote}>Downvote</button>
      </div>

    );

  }
});

module.exports = VoteButtons;
