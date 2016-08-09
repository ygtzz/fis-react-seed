var React = require('react');
var DateTime = require('filter/datetime');
var Category = require('category/category.jsx');
var service = require('mock/service.js');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('redux/actions');
var antd = require('antd');
var message = antd.message;

var List = React.createClass({
    componentWillReceiveProps:function(nextProps,nextState) {
        var oArticle = nextProps.oArticle,
            oCate = nextProps.oCate;
        if(oArticle.get('bFetching')){
            message.loading('loading...',0.2);
        }
        else{
            message.destroy();
        }
    },
    render: function() {
        var sType = this.props.type,
            oArticle = this.props.oArticle,
            oCate = this.props.oCate;
        var aCate = oCate.get('data'),
            aArticle = oArticle.get('data');
        var aArticleHtml = aArticle.map(function(art,index) {
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
                <Category type={sType} aCate={aCate} />
                {/*文章列表*/}
                <ul className="article-list top-notes">
                    {aArticleHtml}
                </ul>
            </div>
        );
    }
});

module.exports = connect(
    function(state,ownProps){
        return {
            oArticle : state.trend.get('oArticle'),
            oCate : state.trend.get('oCate')
        }
    }
)(List);


