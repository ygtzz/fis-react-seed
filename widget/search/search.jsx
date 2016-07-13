var React = require('react');
var oEventType = require('eventType/eventType');

var Search = React.createClass({
	render: function() {
		return (
			<div>
				<input name="utf8" type="hidden" value="✓" />
				{/*todo search*/}
				<input onKeyUp={this.fSearch} type="text" name="q" id="q" placeholder="搜索" className="input-medium search-query" />	
			</div>
		);
	},
	fSearch: function(evt){
		evt.preventDefault();
    	evt.stopPropagation();
		console.log('search keyup');
		console.log('evt ' + evt.target.value);
		this.props.pubsub.publish(oEventType.search,evt.target.value);
	}
});

module.exports = Search;