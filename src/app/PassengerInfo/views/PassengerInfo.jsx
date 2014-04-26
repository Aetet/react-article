/**
* @jsx React.DOM
*/
var React = require('react');
var PassengerInfo = React.createClass({
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
            <span className="btn">M</span>
            <span className="btn">F</span>
          </span>
        </div>
      </div>
    );
  }
});
module.exports = PassengerInfo;