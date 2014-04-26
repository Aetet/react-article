/**
* @jsx React.DOM
*/
var React = require('react');
var PassengerInfo = React.createClass({
  render: function () {
    return (
      <div>
        <span className="field">
        <label>Имя</label>
        <input type="text" name="firstName" />
        </span>
        <span className="field">
        <label>Фамилия</label>
        <input type="text" name="lastName" />
        </span>
        <span className="field">
          <span>M</span>
          <span>F</span>
        </span>
      </div>
    );
  }
});
module.exports = PassengerInfo;