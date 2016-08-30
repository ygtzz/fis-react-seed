import {createAction} from 'redux-act';

const fGetArticleDetailRequest = createAction();

const fGetArticleDetailOk = createAction(articleId => ({articleId}) );

function fGetArticleDetailAsync(articleId) {
    return function(dispatch) {
        dispatch(fGetArticleDetailRequest());
        setTimeout(function() {
            dispatch(fGetArticleDetailOk(articleId));
        },200);
    }
}

const fGetCateListRequest = createAction();

const fGetCateListOk = createAction((sType,sCate) => ({
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

const fGetArticleListRequest = createAction();

const fGetArticleListOk = createAction((sType,sCate) =>  ({
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

const fSearchArticlesRequest = createAction();

const fSearchArticlesOk = createAction((sKeyword) => ({sKeyword}) );

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