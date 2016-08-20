import {action as aActionType,status as aActionStatus} from 'action-type';
import {createAction} from 'redux-actions'

// function fGetArticleDetail(status,articleId) {
//     return {
//         type: aActionType['getArticleDetail'],
//         status: status,
//         articleId: articleId
//     }
// }
const fGetArticleDetail = createAction(aActionType['getArticleDetail'],(status,articleId) => {
    return ({
        status: status,
        articleId: articleId
    })
});

function fGetArticleDetailAsync(articleId) {
    return function(dispatch) {
        dispatch(fGetArticleDetail(aActionStatus['request']));
        setTimeout(function() {
            dispatch(fGetArticleDetail(aActionStatus['response'],articleId));
        },200);
    }
}

function fGetCateList(status,sType,sCate){
    return {
        type: aActionType['getCateList'],
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
        },200);
    }
}

function fGetArticleList (status,sType,sCate) {
    return {
        type: aActionType['getArticleList'],
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
        },200);
    }
}

function fSearchArticles(sKeyword){
    return {
        type: aActionType['searchArticles'],
        sKeyword: sKeyword
    }
}
function fSearchArticlesAsync(sType,sCate) {
    return function(dispatch) {
        dispatch(fSearchArticles(aActionStatus['request']));
        setTimeout(function() {
            dispatch(fSearchArticles(aActionStatus['response'],sType,sCate));
        },200);
    }
}

export default {
    fGetArticleDetail: fGetArticleDetailAsync,
    fGetCateList: fGetCateListAsync,
    fGetArticleList: fGetArticleListAsync,
    fSearchArticles: fSearchArticlesAsync
}