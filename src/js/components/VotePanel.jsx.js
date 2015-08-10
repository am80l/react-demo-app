var React = require('react'),
    VoteStore = require('../stores/VoteStore'),
    VoteButtons = require('./VoteButtons.jsx'),
    VoteCount = require('./VoteCount.jsx');

var getStateFromVoteStore = function(){
  return { count: VoteStore.getCount() }
}

var VotePanel = React.createClass({

  getInitialState: function() {
    return getStateFromVoteStore()
  },

  componentDidMount: function() {
    VoteStore.addChangeListener(this._onChange);
  },

  _onChange : function(){
    this.setState(function(){
      var count = VoteStore.getCount();
      return {
        count: count
      }
    });
  },

  render: function(){
    return (
      <div className="container">
        <VoteButtons />
        <VoteCount count={this.state.count}  />
      </div>
    );

  }

});


React.render(<VotePanel />, document.getElementById('vote_container'));
