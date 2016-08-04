var types = require('action-type');

function fGetArticleDetail(article) {
    return {
        type: types['getArticleDetail'],
        article: article
    }
}

function fGetCateList(cates){
    return {
        type: types['getCateList'],
        cates: cates
    }
}

function fGetArticleList (articles) {
    return {
        type: types['getArticleList'],
        articles: articles
    }
}

function fSearchArticles(articles){
    return {
        type: types['searchArticles'],
        articles: articles
    }
}

module.exports = {
    fGetArticleDetail: fGetArticleDetail,
    fGetCateList: fGetCateList,
    fGetArticleList: fGetArticleList,
    fSearchArticles: fSearchArticles
}