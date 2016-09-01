import {createAction} from 'redux-act';

const fGetArticleDetailRequest = createAction('fGetArticleDetailRequest');

const fGetArticleDetailOk = createAction('fGetArticleDetailOk',articleId => ({articleId}) );

function fGetArticleDetailAsync(articleId) {
    return function(dispatch) {
        dispatch(fGetArticleDetailRequest());
        setTimeout(function() {
            dispatch(fGetArticleDetailOk(articleId));
        },200);
    }
}

const fGetCateListRequest = createAction('fGetCateListRequest');

const fGetCateListOk = createAction('fGetCateListOk',(sType,sCate) => ({
        sType: sType,
        sCate: sCate
    })
);

function fGetCateListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetCateListRequest());
        setTimeout(function() {
            dispatch(fGetCateListOk(sType,sCate));
        },200);
    }
}

const fGetArticleListRequest = createAction('fGetArticleListRequest');

const fGetArticleListOk = createAction('fGetArticleListOk',(sType,sCate) =>  ({
        sType: sType,
        sCate: sCate
    })
);

function fGetArticleListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetArticleListRequest());
        setTimeout(function() {
            dispatch(fGetArticleListOk(sType,sCate));
        },200);
    }
}

const fSearchArticlesRequest = createAction('fSearchArticlesRequest');

const fSearchArticlesOk = createAction('fSearchArticlesOk',(sKeyword) => ({sKeyword}) );

function fSearchArticlesAsync(sKeyword) {
    return function(dispatch) {
        dispatch(fSearchArticlesRequest());
        setTimeout(function() {
            dispatch(fSearchArticlesOk(sKeyword));
        },200);
    }
}

export default {
    fGetArticleDetail: fGetArticleDetailAsync,
    fGetCateList: fGetCateListAsync,
    fGetArticleList: fGetArticleListAsync,
    fSearchArticles: fSearchArticlesAsync,
    fGetArticleDetailRequest,
    fGetArticleDetailOk,
    fGetCateListRequest,
    fGetCateListOk,
    fGetArticleListRequest,
    fGetArticleListOk,
    fSearchArticlesRequest,
    fSearchArticlesOk
}