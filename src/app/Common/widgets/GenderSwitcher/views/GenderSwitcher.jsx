/**
* @jsx React.DOM
*/
var React = require('react'),
    GenderViewHelper = require('root/Common/widgets/GenderSwitcher/helpers/GenderViewHelper');
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
    var maleClass = GenderViewHelper.generateMaleClass(this.props.gender, ['btn']);
    var femaleClass = GenderViewHelper.generateFemaleClass(this.props.gender, ['btn']);

    return (
      <span className="btn-group">
        <span data-type="m" className={maleClass} onClick={this.handleClick} >М</span>
        <span data-type="f" className={femaleClass} onClick={this.handleClick} >Ж</span>
      </span>
    );
  }
});
module.exports = GenderSwitcher;