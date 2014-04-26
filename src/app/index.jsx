/** @jsx React.DOM */

var React = require('react'),
    Booking = require('root/Booking/views/Booking');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <Booking />
      </div>
    );
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.appl'));
