var types = require('../action-type');
var service = require('mock/service');
var object = require('lodash/object');
var Immutable = require('immutable');

var oState = Immutable.fromJS({
    aCate:[],
    aArticle:[]
});

function fTrendReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    switch(action.type){
        case types['getCateList']:
            return state.set(
                'aCate', fGetCateList(action.sType,action.sCate)
            );
        case types['getArticleList']:
            return state.set(
                'aArticle', fGetArticleList(action.sType,action.sCate)
            );
        case types['searchArticles']:
            return state.set(
                'aArticle', fSearchArticles(action.sKeyword)
            );
        default:
            return state;
    }
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
