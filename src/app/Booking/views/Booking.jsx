/**
* @jsx React.DOM
*/
var React = require('react'),
    PassengerInfo = require('root/PassengerInfo/views/PassengerInfo'),
    Submit = require('root/Submit/views/Submit'),
    clone = require('root/Common/utils/cloneObject'),
    BookingManager = require('root/Booking/models/BookingManager');
var Booking = React.createClass({
  getInitialState: function () {
    return {
      firstName: '',
      lastName: '',
      gender: ''
    };
  },

  handleChange: function (name, value) {
    var state = {};
    state[name] = value;
    this.setState(state);
  },

  handleSubmit: function () {
    var dataForServer = clone(this.state);
    BookingManager.saveData(dataForServer)
      .then(function (successMsg) {
        alert(successMsg);
      })
      .fail(function (err) {
        console.log('err when save', err);
      });
  },

  render: function () {
    return (
      <div>
        <PassengerInfo firstName={this.state.firstName}
                       lastName={this.state.lastName}
                       gender={this.state.gender}
                       onChange={this.handleChange}/>
        <Submit onSubmit={this.handleSubmit}/>
      </div>
    );
  }
});
module.exports = Booking;