var React = require('react');

var Category = React.createClass({
	render: function() {
		var type = this.props.type;
		var aCate = this.props.aCate || [];
		var aCateHtml = aCate.map(function(c,index) {
			var sLiClass = c.active ? 'active' : '';
			return (
				<li key={'cate' + index} className="{sLiClass}">
  					<a href="/#{ type }/{ c.id }" className="category">{ c.name }</a>
				</li>
			);
		});

		return (
			<ul className="unstyled clearfix sort-nav" id="list-container">
    			{aCateHtml}
			</ul>
		);
	}
});

module.exports = Category;