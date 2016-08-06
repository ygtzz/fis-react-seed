var types = require('action-type');

function fGetArticleDetail(articleId) {
    return {
        type: types['getArticleDetail'],
        articleId: articleId
    }
}

function fGetCateList(sType,sCate){
    return {
        type: types['getCateList'],
        sType: sType,
        sCate: sCate
    }
}

function fGetArticleList (sType,sCate) {
    return {
        type: types['getArticleList'],
        sType: sType,
        sCate: sCate
    }
}

function fSearchArticles(sKeyword){
    return {
        type: types['searchArticles'],
        sKeyword: sKeyword
    }
}

module.exports = {
    fGetArticleDetail: fGetArticleDetail,
    fGetCateList: fGetCateList,
    fGetArticleList: fGetArticleList,
    fSearchArticles: fSearchArticles
}