/**
* @jsx React.DOM
*/
var React = require('react'),
    PassengerInfo = require('root/PassengerInfo/views/PassengerInfo'),
    Submit = require('root/Submit/views/Submit');
var Booking = React.createClass({
  getInitialState: function () {
    return {
      firstName: {},
      lastName: '',
      gender: ''
    };
  },
  render: function () {
    return (
      <div>
        <PassengerInfo firstName={this.state.firstName}
                       lastName={this.state.lastName}
                       gender={this.state.gender} />
        <Submit />
      </div>
    );
  }
});
module.exports = Booking;