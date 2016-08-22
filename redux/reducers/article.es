import oActionType from '../action-type';
import service from 'mock/service';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

const oState = Immutable.fromJS({ 
    oArticle: {
        bFetching: false,
        bError: false,
        data: { 'content': '' } 
    }
});

const fArticleReducer = handleActions({
    [oActionType['getArticleDetail.request']]:(state,action) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [oActionType['getArticleDetail.ok']]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fGetArticleDetail(action.payload.articleId);
            });
        return s;
    },
    [oActionType['getArticleDetail.error']]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bError'], function(bError) {
                return true;
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
