import service from 'mock/service';
import Immutable from 'immutable';
import {createReducer} from 'redux-act';
import actions from '../actions'

const oState = Immutable.fromJS({ 
    oArticle: {
        bFetching: false,
        bError: false,
        data: { 'content': '' } 
    }
});

const fArticleReducer = createReducer({
    [actions.fGetArticleDetailRequest]:(state,action) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [actions.fGetArticleDetailOk]:(state,payload) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fGetArticleDetail(payload.articleId);
            });
        return s;
    }
},oState);

function fGetArticleDetail(id) {
    var oArticle;
    service.getArticleDetail(id, function(article) {
        oArticle = article;
    })
    return oArticle;
}

export default fArticleReducer;
