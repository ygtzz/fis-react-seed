var oActionType = require('../action-type');
var aActionType = oActionType.action;
var aActionStatus = oActionType.status;
var service = require('mock/service');
var Immutable = require('immutable');

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
    switch(action.status){
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
                return fGetArticleDetail(action.articleId);
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

module.exports = fArticleReducer;
