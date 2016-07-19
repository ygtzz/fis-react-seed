var React = require('react');
var DateTime = require('filter/datetime');
var Category = require('category/category.jsx');
var service = require('mock/service.js');
var oEventType = require('eventType/eventType');

var List = React.createClass({
    getInitialState: function () {
        console.log('list getInitialState');
        return {
            aCate: [],
            aArticle:[]
        }
    },
    componentWillMount:function(){
        console.log('list componentWillMount');
        var type = this.props.type;
        var cate = this.props.cate;
        this.fSetData(type,cate,currentView);
    },
    componentWillReceiveProps: function(nextProps,nextState) {
        console.log('list componentWillReceiveProps');
        var type = nextProps.type;
        var cate = nextProps.cate;
        this.fSetData(type,cate);
    },
    componentDidMount:function(){
        console.log('list componentDidMount');
        this.props.pubsub.subscribe(oEventType.search,this.searchArticles);
    },
    render: function() {
        var aArticleHtml = this.state.aArticle.map(function(art,index) {
            var sItemclass = art.wrap_img ? 'have-img' : '',
                sArtHref = '#p/' + art.article_id,
                sAuthorHref = '#users/' + art.author_id;
            var sWrapImg = art.wrap_img ? 
                        <a className="wrap-img" href={sArtHref}>
                            <img src = {art.wrap_img} alt="300" />
                        </a> : '';
            return (
                <li key={'art' + index} className={sItemclass}>
                        {/*文章封面*/}
                        {sWrapImg}
                        <div>
                            <p className="list-top">
                                <a className="author-name blue-link" href={sAuthorHref}>
                                    { art.author }
                                </a>
                                <em>·</em>
                                <span className="time">
                                    <DateTime date={art.timestamp} />
                                </span>
                            </p>
                            <h4 className="title">
                                <a href={sArtHref}>
                                    { art.title }
                                </a>
                            </h4>
                            <a className="avatar maleskine-author" href={sAuthorHref}>
                                <img src = {art.avatar} />
                            </a>
                            <div className="list-footer">
                                <a  href={sArtHref}>
                                    阅读 {art.read}
                                </a>
                                <a  href={sArtHref}>
                                    · 评论 {art.comment}
                                </a>
                                · 喜欢 {art.like}
                            </div>
                        </div>
                </li>
            );
        });

        return (
            <div id="list-container">
                {/*文章分类*/}
                <Category type={this.props.type} aCate={this.state.aCate} />
                {/*文章列表*/}
                <ul className="article-list top-notes">
                    {aArticleHtml}
                </ul>
            </div>
        );
    },
    fSetData: function(type,cate){
            this.getCateList(type,cate),
            this.getArticleList(type,cate);
    },
    /*获取分类列表*/
    getCateList : function(type,cate){
        var cateList = {
            'hot' : [{
                'id' : 'now',
                'name' : '当前热门'
            },
            {
                'id' : 'weekly',
                'name' : '七日热门'
            },
            {
                'id' : 'mouthly',
                'name' : '三十日热门'
            }],

            'notes' : [{
                'id' : 'all',
                'name' : '全部'
            },
            {
                'id' : '13',
                'name' : '市集'
            },
            {
                'id' : '14',
                'name' : '生活家'
            },
            {
                'id' : '15',
                'name' : '世间事'
            }]
        };

        var list  = cateList[type] || [];
        for (var i = 0; i < list.length; i++) {
            list[i]['active'] = list[i]['id'] == cate;
        };      
        this.setState({aCate: list});
    },
    /*获取某个分类下的文章列表*/
    getArticleList: function (type,cate) {
        var self = this;
        service.getArticleList(type,cate,function(articles){
            self.setState({aArticle: articles});
        })
    },
    /*搜索文章列表*/
    searchArticles: function(evt,keyword){
        var self = this;
        service.searchArticles(keyword,function(articles){
            self.setState({aArticle: articles});
        })
    }
});

module.exports = List;


