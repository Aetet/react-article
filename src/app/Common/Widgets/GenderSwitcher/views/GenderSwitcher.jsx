/**
* @jsx React.DOM
*/
var React = require('react');
var GenderSwitcher = React.createClass({
  propTypes: {
    gender: React.PropTypes.string
  },

  handleClick: function (e) {
    var target = e.target,
        type = target.dataset.type;

    this.props.onChange(type);
  },

  render: function () {
    return (
      <span className="btn-group">
        <span data-type="m" className="btn" onClick={this.handleClick} >М</span>
        <span data-type="f" className="btn" onClick={this.handleClick} >Ж</span>
      </span>
    );
  }
});
module.exports = GenderSwitcher;