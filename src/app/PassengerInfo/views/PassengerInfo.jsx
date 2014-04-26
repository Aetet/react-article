/**
* @jsx React.DOM
*/
var React = require('react');
var PassengerInfo = React.createClass({
  propTypes: {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    gender: React.PropTypes.string
  },

  handleChange: function (e) {
    var target = e.target,
        name = target.name,
        value = target.value;

    this.props.onChange(name, value);
  },

  render: function () {
    return (
      <div>
        <span >
        <label>Имя</label>
        <input onChange={this.handleChange} type="text" name="firstName" />
        </span>
        <span >
        <label>Фамилия</label>
        <input onChange={this.handleChange} type="text" name="lastName" />
        </span>
        <div className="controls">
          <span className="btn-group">
            <span className="btn">М</span>
            <span className="btn">Ж</span>
          </span>
        </div>
      </div>
    );
  }
});
module.exports = PassengerInfo;