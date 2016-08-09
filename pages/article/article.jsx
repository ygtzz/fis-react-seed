var React = require('react');
var marked = require('marked');
var Footer = require('footer/footer');
var service = require("mock/service.js");
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('redux/actions');
var antd = require('antd');
var message = antd.message;

var Article = React.createClass({
    componentWillMount: function(){
        console.log('article mount');
       	this.fAction(this.props);	
        this.fLoading(this.props);
    },
    componentWillReceiveProps: function(nextProps,nextState) {
        console.log('article receive');
       	this.fAction(nextProps);	
        this.fLoading(nextProps);
    },
    fAction:function(props){
		var id = props.params.id;
        var actions = props.actions;		
        actions.fGetArticleDetail(id);	
    },
    fLoading:function(nextProps){
        var oArticle = nextProps.oArticle;
        if(oArticle.get('bFetching')){
            message.loading('loading...',0.2);
        }
        else{
            message.destroy();
        }    
    },
    render: function() {
        var oArticle = this.props.oArticle;
        var article = oArticle.get('data');
        var sArtContent = marked(article.content || '');
        return (
            <div>
                <div className="container reader-font1">
                <div className="article">
                    <div className="preview">
                        <div className="author-info">
                            <a className="avatar" href="#">
                                <img thumbnail="90x90" quality="100" src={article.avatar} />
                            </a>
                            <span className="label">
                                作者
                            </span>
                            <a className="author-name blue-link" href="#">
                                <span>
                                    {article.author}
                                </span>
                            </a>
                            <span data-toggle="tooltip" data-original-title="最后编辑于 2015.06.21 18:49">
                                {article.timestamp}
                            </span>
                            <div>
                                <span>
                                    写了85799字
                                </span>
                                ，
                                <span>
                                    被{article.read}人关注
                                </span>
                                ，
                                <span>
                                    获得了{article.like}个喜欢
                                </span>
                            </div>
                        </div>
                        <h1 className="title">
                            {article.title}
                        </h1>
                        <div className="meta-top">
                            <span className="wordage">
                                字数5669
                            </span>
                            <span className="views-count">
                                阅读{article.read}
                            </span>
                            <span className="comments-count">
                                评论{article.comment}
                            </span>
                            <span className="likes-count">
                                喜欢{article.like}
                            </span>
                        </div>
                        <div className="show-content" dangerouslySetInnerHTML={{__html: sArtContent}}>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div> 
        );
    }
});

module.exports = connect(
    function(state){
        return {
            oArticle: state.article.get('oArticle')
        }
    },
    function(dispatch){
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(Article);


