import {action as aActionType,status as aActionStatus} from '../action-type';
import service from 'mock/service';
import Immutable from 'immutable';

var oState = Immutable.fromJS({ 
    oArticle: {
        bFetching: false,
        bError: false,
        data: { 'content': '' } 
    }
});

function fArticleReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    var st = state;
    switch(action.type){
        case aActionType['getArticleDetail']:
            st = fArticleHandler(state,action);
            break;
        default:
            break;
    }
    return st;
}

function fArticleHandler(state,action) {
    var s = state;
    var payload = action.payload;
    switch(payload.status){
        case aActionStatus['request']:
            s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
            break;
        case aActionStatus['response']:
            s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fGetArticleDetail(payload.articleId);
            });
            break;
        case aActionStatus['error']:
            s = state.updateIn(['oArticle', 'bError'], function(bError) {
                return true;
            });
            break;
        default:
            break;
    }
    return s;
}

function fGetArticleDetail(id) {
    var oArticle;
    service.getArticleDetail(id, function(article) {
        oArticle = article;
    })
    return oArticle;
}

export default fArticleReducer;
