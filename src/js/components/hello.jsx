var React = require('react');

var Hello = React.createClass({
    componentWillMount: function() {
        console.log("componentWillMount");
    },

    componentDidMount: function() {
        console.log("componentDidMount");
    },

    componentWillUnmount: function() {
        console.log("componentWillUnmount");
    },

    render: function() {
        console.log("render");

        return (
            <p>Hi there. If you can see this, it works.</p>
        );
    }
});

module.exports = Hello;