var oActionType = require('../action-type');
var aActionType = oActionType.action;
var aActionStatus = oActionType.status;
var service = require('mock/service');
var Immutable = require('immutable');

var oState = Immutable.fromJS({
    oCate: {
        bFetching:false,
        bError: false,
        data: []
    },
    oAtricle:{
        bFetching:false,
        bError: false,
        data: []
    }
});

function fTrendReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    var st;
    switch(action.type){
        case aActionType['getCateList']:
            st =  fCateHandler(state,action);
            break;
        case aActionType['getArticleList']:
            st = fArticleHandler(state,action);
            break;
        case aActionType['searchArticles']:
            st = fSearchHandler(state,action);
            break;
        default:
            break;
    }
    return st;
}

function fCateHandler(state,action) {
    var s;
    switch(action.status){
        case aActionStatus['request']:
            s = state.updateIn(['oCate', 'bFetching'], function(bFetching) {
                return true;
            });
            break;
        case aActionStatus['response']:
            s = state.updateIn(['oCate', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oCate', 'data'], function(data) {
                return fGetCateList(action.sType,action.sCate);
            });
            break;
        case aActionStatus['error']:
            s = state.updateIn(['oCate', 'bError'], function(bError) {
                return true;
            });
            break;
        default:
            break;
    }
    return s;
}

function fArticleHandler(state,action) {
    var s;
    switch(action.status){
        case aActionStatus['request']:
            s = state.updateIn(['oAtricle', 'bFetching'], function(bFetching) {
                return true;
            });
            break;
        case aActionStatus['response']:
            s = state.updateIn(['oAtricle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oAtricle', 'data'], function(data) {
                return fGetArticleList(action.sType,action.sCate);
            });
            break;
        case aActionStatus['error']:
            s = state.updateIn(['oAtricle', 'bError'], function(bError) {
                return true;
            });
            break;
        default:
            break;
    }
    return s;
}

function fSearchHandler(state,action){
    var s;
    switch(action.status){
        case aActionStatus['request']:
            s = state.updateIn(['oAtricle', 'bFetching'], function(bFetching) {
                return true;
            });
            break;
        case aActionStatus['response']:
            s = state.updateIn(['oAtricle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oAtricle', 'data'], function(data) {
                return fSearchArticles(action.sKeyword);
            });
            break;
        case aActionStatus['error']:
            s = state.updateIn(['oAtricle', 'bError'], function(bError) {
                return true;
            });
            break;
        default:
            break;
    }
    return s;
}

function fGetCateList(type,cate){
    var cateList = {
        'hot' : [{
            'id' : 'now',
            'name' : '当前热门'
        },
        {
            'id' : 'weekly',
            'name' : '七日热门'
        },
        {
            'id' : 'mouthly',
            'name' : '三十日热门'
        }],

        'notes' : [{
            'id' : 'all',
            'name' : '全部'
        },
        {
            'id' : '13',
            'name' : '市集'
        },
        {
            'id' : '14',
            'name' : '生活家'
        },
        {
            'id' : '15',
            'name' : '世间事'
        }]
    };
    var list  = cateList[type] || [];
    for (var i = 0; i < list.length; i++) {
        list[i]['active'] = list[i]['id'] == cate;
    };      
    return list;
}

function fGetArticleList (type,cate) {
    var aArticle;
    service.getArticleList(type,cate,function(articles){
        aArticle = articles;
    });
    return aArticle;
}

function fSearchArticles(keyword){
    var aArticle;
    service.searchArticles(keyword,function(articles){
        aArticle = articles;
    })
    return aArticle;
}

module.exports = fTrendReducer;
