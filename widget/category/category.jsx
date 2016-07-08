var React = require('react');

var Category = React.createClass({
	render: function() {
		var type = this.props.type;
		var aCate = this.props.aCate.map(function(c) {
			var sLiClass = c.active ? 'active' : '';
			<li className="{sLiClass}">
  				<a href="/#{ type }/{ c.id }" className="category">{ c.name }</a>
			</li>
		});
		return (
			<ul className="unstyled clearfix sort-nav" id="list-container">
    			{aCate}
			</ul>
		);
	}
});

module.exports = Category;