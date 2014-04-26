/**
* @jsx React.DOM
*/
var React = require('react'),
    PassengerInfo = require('root/PassengerInfo/views/PassengerInfo'),
    Submit = require('root/Submit/views/Submit');
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
    console.log('name', name, 'value', value);
    this.setState(state);
  },

  render: function () {
    return (
      <div>
        <PassengerInfo firstName={this.state.firstName}
                       lastName={this.state.lastName}
                       gender={this.state.gender}
                       onChange={this.handleChange}/>
        <Submit />
      </div>
    );
  }
});
module.exports = Booking;