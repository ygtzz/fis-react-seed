var React = require('react');
var ReactDom = require('react-dom');
var Trend = require('pages/trend/trend.jsx');
var Article = require('pages/article/article.jsx');
var PubSub = require('pubsub');
var oEventType = require('eventType/eventType');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.Redirect;
var browserHistory = ReactRouter.browserHistory;

var App = React.createClass({
	childContextTypes: {
         pubsub: React.PropTypes.object.isRequired
    },
    getChildContext: function() {
         return {
             pubsub: PubSub
         };
    },
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

ReactDom.render(
  <Router>
  	<Route path="/" component={App}>
	  	<IndexRedirect to="/hot/now" />
    	<Route path="/p/:id" component={Article}/>
    	<Route path="/:type/:cate" component={Trend}/>
	</Route>
  </Router>,
  document.getElementById('app')
);


