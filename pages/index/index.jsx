var React = require('react');
var ReactDom = require('react-dom');
var Trend = require('pages/trend/trend.jsx');
var Router = require('director').Router;
var PubSub = require('pubsub');
var router = new Router();
var oEventType = {
	'cate':'catechange',
	'type':'typechange',
	'currentView':'currentViewchange',
	'articleId':'articleIdchange'
};

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
		PubSub.subscribe(oEventType.articleId,this.fArticleIdchange);
		PubSub.subscribe(oEventType.currentView,this.fCurrentViewchange);
		PubSub.subscribe(oEventType.type,this.fTypeChange);
		PubSub.subscribe(oEventType.cate,this.fCatechange);
	},
	render: function() {
		return (
			<Trend type={this.state.type} cate={this.state.cate} />
		);
	},
	fArticleIdchange:function(article_id){
		this.setState({
			article_id:article_id
		});
	},
	fCurrentViewChange: function(currentView){
		this.setState({
			currentView:currentView
		});
	},
	fTypeChange: function(type){
		console.log(type);
		this.setState({
			type:type
		});
	},
	fCateChange: function(cate){
		this.setState({
			cate:cate
		});
	}
});

ReactDom.render(
  <App />,
  document.getElementById('app')
);

//首页
router.on('/home', function (cate){
    PubSub.publish(oEventType.currentView,'home');
})
//热门文章
router.on('/hot/:cate', function (cate){
    listHandler('trend','hot',cate);
})
//分类推荐
router.on('/notes/:cate', function (cate){
    listHandler('trend','notes',cate);
})
//我的订阅
router.on('/subscribe/:cate', function (cate){
    listHandler('trend','subscribe',cate);
})
//文章详细
router.on('/p/:id', function (id){
	var self = this;
    require.async('pages/article/article.jsx', function(pageComponent){
    	PubSub.publish(oEventType.articleId, id);
    	PubSub.publish(oEventType.currentView,'home');
    });
})
/*错误页*/
router.on('/error/notfound', function () {
	var self = this;
    require.async('pages/error/notfound.jsx', function(pageComponent){
    	PubSub.publish(oEventType.currentView,'not-found');
    });
})
//页面未找到
router.configure({
  notfound: function () {
    router.setRoute('/error/notfound');
  }
})
//默认首页
router.init('/hot/now');

//文章列表页通用处理
function listHandler(view,type,cate){
    require.async('pages/trend/trend.jsx', function(pageComponent){
    	console.log('type ' + type + ' cate ' + cate + ' view ' + view);
    	PubSub.publish(oEventType.type,type);
    	PubSub.publish(oEventType.cate,cate);
    	PubSub.publish(oEventType.articleId,'');
    	PubSub.publish(oEventType.currentView,view);
    });
}

