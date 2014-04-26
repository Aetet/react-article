/**
* @jsx React.DOM
*/
var React = require('react');
var Submit = React.createClass({
  handleClick: function () {
    this.props.onSubmit();
  },

  render: function () {
    return (
      <div className="form-actions">
        <button className="btn btn-primary"
                onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});
module.exports = Submit;