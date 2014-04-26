/** @jsx React.DOM */

var React = require('react');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <div>Booking</div>
      </div>
    );
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.appl'));
