var React = require('react');

var Search = React.createClass({
	render: function() {
		return (
			<div>
				<input name="utf8" type="hidden" value="✓" />
				{/*todo search*/}
				<input v-model="search" type="text" name="q" id="q" placeholder="搜索" className="input-medium search-query" />	
			</div>
		);
	}
});

module.exports = Search;