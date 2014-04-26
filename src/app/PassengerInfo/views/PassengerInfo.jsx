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

  render: function () {
    return (
      <div>
        <span >
        <label>Имя</label>
        <input type="text" name="firstName" />
        </span>
        <span >
        <label>Фамилия</label>
        <input type="text" name="lastName" />
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