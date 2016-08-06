var React = require('react');
var DebounceInput = require('react-debounce-input');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('redux/actions');

var Search = React.createClass({
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
		this.props.actions.fSearchArticles(evt.target.value);
	}
});

module.exports = connect(
    null,
    function(dispatch){
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(Search);