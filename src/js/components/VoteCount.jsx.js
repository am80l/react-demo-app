var React = require('react'),
    VoteStore = require('../stores/VoteStore');

var VoteCount = React.createClass({

  render: function(){

    return (
      <div id="vote_count_container">
        <h1><span className="label label-default">{this.props.count}</span></h1>
      </div>
    );

  }

});

module.exports = VoteCount;
