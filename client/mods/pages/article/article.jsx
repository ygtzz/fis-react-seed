import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import marked from 'widget/marked/marked';
import Footer from 'widget/footer';
import service from 'mock/service';
import actions from 'redux/actions';

class Article extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('article mount');
       	this.fAction(this.props);
    }
    componentWillReceiveProps(nextProps,nextState) {
        console.log('article receive');
        if(nextProps.params.id !== this.props.params.id){
       	    this.fAction(nextProps);            
        }
    }
    fAction(props){
		const id = props.params.id;
        const actions = props.actions;		
        actions.fGetArticleDetail(id);	
    }
    render() {
        console.log('article render');
        const oArticle = this.props.oArticle;
        const article = oArticle.get('data');
        const sArtContent = marked(article.content || '');
        return (
            <div>
                <div className="container reader-font1">
                <div className="article">
                    <div className="preview">
                        <div className="author-info">
                            <a className="avatar" href="#">
                                <img data-thumbnail="90x90" data-quality="100" src={article.avatar} />
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
}

export default connect(
    state => { return {oArticle: state.article.get('oArticle')} },
    dispatch => { return {actions: bindActionCreators(actions,dispatch)} }
)(Article);


