var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({

	render:function(){
		return (
       <div>测试app</div>
    );
	}
});

ReactDom.render(
  <App />,
  document.getElementById('app')
);
