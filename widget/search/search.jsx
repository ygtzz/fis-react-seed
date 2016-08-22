import React,{Component} from 'react';
import DebounceInput from 'react-debounce-input';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from 'redux/actions';

class Search extends Component{
	fSearch(evt){
		console.log(Date.now());
		this.props.actions.fSearchArticles(evt.target.value);
	}
	render() {
		return (
			<div>
				<input name="utf8" type="hidden" value="✓" />
				{/*todo search*/}
				<DebounceInput
          			minLength={1}
          			debounceTimeout={300}
          			onChange={this.fSearch.bind(this)} 
          			className="input-medium search-query" 
          			name="q" id="q" placeholder="搜索" />
			</div>
		);
	}
}

export default connect(
    null,
    function(dispatch){
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(Search);