var React = require('react');
var ReactDom = require('react-dom');
var Trend = require('pages/trend/trend.jsx');
var Article = require('pages/article/article.jsx');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.Redirect;
var hashHistory = ReactRouter.hashHistory;
var Provider = require('react-redux').Provider;
var store = require('redux/store');
var routerRedux = require('react-router-redux');

var history = routerRedux.syncHistoryWithStore(hashHistory,store);

var App = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

ReactDom.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRedirect to='/hot/now' />
				<Route path="/p/:id" component={Article}/>
				<Route path="/:type/:cate" component={Trend}/>
			</Route>
		</Router>
  	</Provider>,
  	document.getElementById('app')
);

location.hash = '/hot/now';