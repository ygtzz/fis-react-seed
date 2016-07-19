var React = require('react');
var oEventType = require('eventType/eventType');
var DebounceInput = require('react-debounce-input');

var Search = React.createClass({
	contextTypes: {
        pubsub: React.PropTypes.object.isRequired
    },
	render: function() {
		return (
			<div>
				<input name="utf8" type="hidden" value="✓" />
				{/*todo search*/}
				<DebounceInput
          			minLength={1}
          			debounceTimeout={300}
          			onChange={this.fSearch} 
          			className="input-medium search-query" 
          			name="q" id="q" placeholder="搜索" />
			</div>
		);
	},
	fSearch: function(evt){
		console.log(Date.now());
		this.context.pubsub.publish(oEventType.search,evt.target.value);
	}
});

module.exports = Search;