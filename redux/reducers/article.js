var types = require('../action-type');
var service = require('mock/service');
var object = require('lodash/object');

var oState = {
    article: { 'content': '' }
}

function fArticleReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    switch(action.type){
        case types['getArticleDetail']:
            return object.assign({},state,{
                article: fGetArticleDetail(action.articleId)
            });
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
