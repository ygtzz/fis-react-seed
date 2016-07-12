var React = require('react');

var ErrorPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>页面找不到</h1> 
				<a href='/'>返回首页</a>
			</div>
		);
	}
});

module.exports = ErrorPage;