var React = require('react');
var DateTime = require('filter/datetime');

var List = React.createclassName({
    render: function() {
        var aArticle = this.props.aArticle.map(function(art) {
            var sItemclass = art.wrap_img ? 'have-img' : '';
            var sWrapImg = art.wrap_img ? 
                        <a className="wrap-img" href="#p/{ art.article_id }">
                            <img src = {art.wrap_img} alt="300" />
                        </a> : '';
            return (
                <li className={sItemclass}>
                        //文章封面
                        {sWrapImg}
                        <div>
                            <p className="list-top">
                                <a className="author-name blue-link" href="#users/{ art.author_id }">
                                    { art.author }
                                </a>
                                <em>·</em>
                                <span className="time">
                                    <DateTime date={art.timestamp} />
                                </span>
                            </p>
                            <h4 className="title">
                                <a  href="#p/{art.article_id}">
                                    { art.title }
                                </a>
                            </h4>
                            <a className="avatar maleskine-author" href="#users/{ art.author_id }">
                                <img src = {art.avatar} />
                            </a>
                            <div className="list-footer">
                                <a  href="#p/{art.article_id}">
                                    阅读 {art.read}
                                </a>
                                <a  href="#p/{art.article_id}">
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
                //文章分类
                <Category type="type" aCate="cates" />
                //文章列表
                <ul className="article-list top-notes">
                    {aArticle}
                </ul>
            </div>
        );
    }
});

module.exports = List;


