var oActionType = require('../action-type');
var aActionType = oActionType.action;
var aActionStatus = oActionType.status;

function fGetArticleDetail(status,articleId) {
    return {
        type: types['getArticleDetail'],
        status: status,
        articleId: articleId
    }
}
function fGetArticleDetailAsync(articleId) {
    return function(dispatch) {
        dispatch(fGetArticleDetail(aActionStatus['request']));
        setTimeout(function() {
            dispatch(fGetArticleDetail(aActionStatus['response'],articleId));
        },2000);
    }
}

function fGetCateList(status,sType,sCate){
    return {
        type: types['getCateList'],
        status: status,
        sType: sType,
        sCate: sCate
    }
}
function fGetCateListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetCateList(aActionStatus['request']));
        setTimeout(function() {
            dispatch(fGetCateList(aActionStatus['response'],sType,sCate));
        },2000);
    }
}

function fGetArticleList (status,sType,sCate) {
    return {
        type: types['getArticleList'],
        status: status,
        sType: sType,
        sCate: sCate
    }
}
function fGetArticleListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetArticleList(aActionStatus['request']));
        setTimeout(function() {
            dispatch(fGetArticleList(aActionStatus['response'],sType,sCate));
        },2000);
    }
}

function fSearchArticles(sKeyword){
    return {
        type: types['searchArticles'],
        sKeyword: sKeyword
    }
}
function fSearchArticlesAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fSearchArticles(aActionStatus['request']));
        setTimeout(function() {
            dispatch(fSearchArticles(aActionStatus['response'],sType,sCate));
        },2000);
    }
}

module.exports = {
    fGetArticleDetail: fGetArticleDetailAsync,
    fGetCateList: fGetCateListAsync,
    fGetArticleList: fGetArticleListAsync,
    fSearchArticles: fSearchArticlesAsync
}