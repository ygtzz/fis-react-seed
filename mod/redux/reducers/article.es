import oActionType from '../action-type';
import service from 'mock/service';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import {createReducer,createAction} from 'redux-act';

const fGetArticleDetailRequest = createAction(oActionType['getArticleDetail.request'],(articleId) => {
    return ({
        articleId: articleId
    })
});

const fGetArticleDetailOk = createAction(oActionType['getArticleDetail.ok'],(articleId) => {
    return ({
        articleId: articleId
    })
});

const oState = Immutable.fromJS({ 
    oArticle: {
        bFetching: false,
        bError: false,
        data: { 'content': '' } 
    }
});

const fArticleReducer = createReducer({
    [fGetArticleDetailRequest]:(state,action) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [fGetArticleDetailOk]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fGetArticleDetail(action.payload.articleId);
            });
        return s;
    }
},oState);
// const fArticleReducer = handleActions({
//     [oActionType['getArticleDetail.request']]:(state,action) => {
//         let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
//                 return true;
//             });
//         return s;
//     },
//     [oActionType['getArticleDetail.ok']]:(state,action) => {
//        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
//                 return false;
//             });
//             s = state.updateIn(['oArticle', 'data'], function(data) {
//                 return fGetArticleDetail(action.payload.articleId);
//             });
//         return s;
//     },
//     [oActionType['getArticleDetail.error']]:(state,action) => {
//        let s = state.updateIn(['oArticle', 'bError'], function(bError) {
//                 return true;
//             });
//        return s;
//     }             
// },oState);

function fGetArticleDetail(id) {
    var oArticle;
    service.getArticleDetail(id, function(article) {
        oArticle = article;
    })
    return oArticle;
}

export default fArticleReducer;
