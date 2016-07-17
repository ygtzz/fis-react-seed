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
var hashHistory = ReactRouter.hashHistory;

var App = React.createClass({
	getInitialState: function() {
	    return {
	        'currentView' : 'home', //默认首页
        	'type'  : '',
        	'cate'  : '',
        	'article_id' : ''  
	    }
	},
	componentDidMount: function(){
		PubSub.subscribe(oEventType.articleId,this.fArticleIdChange);
		PubSub.subscribe(oEventType.currentView,this.fCurrentViewChange);
		PubSub.subscribe(oEventType.type,this.fTypeChange);
		PubSub.subscribe(oEventType.cate,this.fCateChange);
	},
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	},
	fArticleIdChange:function(evt,article_id){
		this.setState({
			article_id:article_id
		});
	},
	fCurrentViewChange: function(evt,currentView){
		this.setState({
			currentView:currentView
		});
	},
	fTypeChange: function(evt,type){
		this.setState({
			type:type
		});
	},
	fCateChange: function(evt,cate){
		this.setState({
			cate:cate
		});
	}
});

ReactDom.render(
  <Router history={hashHistory}>
  	<IndexRoute component={App}/>
    <Route path="/p/:id" component={Article}/>
    <Route path="/:type/:cate" component={Trend}/>
  </Router>,
  document.getElementById('app')
);

//首页
// router.on('/home', function (cate){
//     PubSub.publish(oEventType.currentView,'home');
// })
// //热门文章
// router.on('/hot/:cate', function (cate){
//     listHandler('trend','hot',cate);
// })
// //分类推荐
// router.on('/notes/:cate', function (cate){
//     listHandler('trend','notes',cate);
// })
// //我的订阅
// router.on('/subscribe/:cate', function (cate){
//     listHandler('trend','subscribe',cate);
// })
// //文章详细
// router.on('/p/:id', function (id){
// 	var self = this;
//     require.async('pages/article/article.jsx', function(pageComponent){
//     	PubSub.publish(oEventType.currentView,'article');
//     	PubSub.publish(oEventType.articleId, id);
//     });
// })
// /*错误页*/
// router.on('/error/notfound', function () {
// 	var self = this;
//     require.async('pages/error/notfound.jsx', function(pageComponent){
//     	PubSub.publish(oEventType.currentView,'not-found');
//     });
// })
// //页面未找到
// router.configure({
//   notfound: function () {
//     router.setRoute('/error/notfound');
//   }
// })
// //默认首页
// router.init('/hot/now');

// //文章列表页通用处理
// function listHandler(view,type,cate){
//     require.async('pages/trend/trend.jsx', function(pageComponent){
//     	PubSub.publish(oEventType.type,type);
//     	PubSub.publish(oEventType.cate,cate);
//     	PubSub.publish(oEventType.currentView,view);
//     });
// }

