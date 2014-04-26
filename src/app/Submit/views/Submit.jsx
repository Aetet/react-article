/**
* @jsx React.DOM
*/
var React = require('react');
var Submit = React.createClass({
  render: function () {
    return (
      <div className="form-actions">
        <button className="btn btn-primary">Submit</button>
      </div>
    );
  }
});
module.exports = Submit;