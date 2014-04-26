/**
* @jsx React.DOM
*/
var React = require('react'),
    PassengerInfo = require('root/PassengerInfo/views/PassengerInfo'),
    Submit = require('root/Submit/views/Submit');
var Booking = React.createClass({
  render: function () {
    return (
      <div>
        <PassengerInfo />
        <Submit />
      </div>
    );
  }
});
module.exports = Booking;