var types = require('../action-type');
var service = require('mock/service');
var Immutable = require('immutable');

var oState = Immutable.fromJS({ 
    article: { 'content': '' } 
});

function fArticleReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    switch(action.type){
        case types['getArticleDetail']:
            return state.set(
                'article',fGetArticleDetail(action.articleId)
            );
        default:
            return state;
    }
}

function fGetArticleDetail(id) {
    var oArticle;
    service.getArticleDetail(id, function(article) {
        oArticle = article;
    })
    return oArticle;
}

module.exports = fArticleReducer;
