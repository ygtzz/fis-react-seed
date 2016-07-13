var React = require('react');
var marked = require('marked');
var Footer = require('footer/footer');
var service = require("mock/service.js");

var Article = React.createClass({
    getInitialState: function() {
        return {
            article:{}  
        };
    },
    componentWillMount: function() {  
        this.getArticleDetail(this.props.articleid);
    },
    componentWillReceiveProps: function(nextProps,nextState) {
        var id = nextProps.articleid;
        this.getArticleDetail(id);
    },
    render: function() {
        var article = this.state.article;
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
    },
    getArticleDetail : function(id){
        var self = this;
        var article = service.getArticleDetail(id,function(article){
            self.setState({article:article});
        })
    }
});

module.exports = Article;


