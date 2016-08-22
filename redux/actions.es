import oActionType from 'action-type';
import {createAction} from 'redux-actions'

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

function fGetArticleDetailAsync(articleId) {
    return function(dispatch) {
        dispatch(fGetArticleDetailRequest(articleId));
        setTimeout(function() {
            dispatch(fGetArticleDetailOk(articleId));
        },200);
    }
}

const fGetCateListRequest = createAction(oActionType['getCateList.request'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});

const fGetCateListOk = createAction(oActionType['getCateList.ok'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});

function fGetCateListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetCateListRequest(sType,sCate));
        setTimeout(function() {
            dispatch(fGetCateListOk(sType,sCate));
        },200);
    }
}

const fGetArticleListRequest = createAction(oActionType['getArticleList.request'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});

const fGetArticleListOk = createAction(oActionType['getArticleList.ok'],(sType,sCate) => {
    return ({
        sType: sType,
        sCate: sCate
    })
});
function fGetArticleListAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fGetArticleListRequest(sType,sCate));
        setTimeout(function() {
            dispatch(fGetArticleListOk(sType,sCate));
        },200);
    }
}

const fSearchArticlesRequest = createAction(oActionType['searchArticles.request'],(sKeyword) => {
    return ({
        sKeyword: sKeyword
    })
});

const fSearchArticlesOk = createAction(oActionType['searchArticles.ok'],(sKeyword) => {
    return ({
        sKeyword: sKeyword
    })
});
function fSearchArticlesAsync(sKeyword) {
    return function(dispatch) {
        dispatch(fSearchArticlesRequest(sKeyword));
        setTimeout(function() {
            dispatch(fSearchArticlesOk(sKeyword));
        },200);
    }
}

export default {
    fGetArticleDetail: fGetArticleDetailAsync,
    fGetCateList: fGetCateListAsync,
    fGetArticleList: fGetArticleListAsync,
    fSearchArticles: fSearchArticlesAsync
}