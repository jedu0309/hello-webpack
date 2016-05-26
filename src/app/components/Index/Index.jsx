

'use strict';

// require core module
var React = require('react');

// define Index component
var Index = React.createClass({
	componentDidMount() {
		console.log('you can write ES6 test code in here');
	},
    render: function () {
        return (
            <div className="inner">
            123astfastga
            </div>
        );
    }


});

// export Index component
module.exports = Index;
