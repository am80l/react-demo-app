var React = require('react'),
    VoteStore = require('../stores/VoteStore');

var VoteCount = React.createClass({

  render: function(){

    return (
      <div id="vote_count_container">
        {this.props.count}
      </div>
    );

  }

});

module.exports = VoteCount;
