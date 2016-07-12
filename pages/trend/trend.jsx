var React = require('react');
var List = require('list/list.jsx');
var Footer = require('footer/footer.jsx');
var Search = require('search/search.jsx');

var Trend = React.createClass({
    render: function() {
        var type = this.props.type;
        var cate = this.props.cate;
        
        return (
            <div>
                <div className="recommended">
                    {/*分类切换*/}
                    <div className="page-title">
                        <ul className="recommened-nav navigation clearfix">
                            {/*用户未订阅专题或人，或者未完成订阅 or 用户订阅列表已准备就绪*/}
                            <li data-name="trending_notes" className={type=='hot' ? 'active' : ''}>
                                <a data-pjax="true" href="/#hot/now">
                                    <i v-if="type=='hot'" className="fa fa-bars">
                                    </i>
                                    热门文章
                                </a>
                            </li>
                            <li data-name="recommended_notes" className={type=='notes' ? 'active' : ''}>
                                <a data-pjax="true" href="/#notes/all">
                                    <i v-if="type=='notes'" className="fa fa-bars">
                                    </i>
                                    今日看点
                                </a>
                            </li>
                            <li data-name="subscription_notes" className={type=='subscribe' ? 'active' : ''}>
                                <a data-pjax="true" href="/#subscribe/all">
                                    <i v-if="type=='subscribe'" className="fa fa-bars">
                                    </i>
                                    我的订阅
                                </a>
                            </li>
                            <img className="hide loader-tiny" src="/static/widget/list/img/tiny.gif"
                            alt="Tiny" />
                            <li className="search">  
                                <Search />             
                            </li>
                        </ul>
                    </div>
                    {/*文章列表*/}
                    <List type={type} cate={cate} />
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = Trend;