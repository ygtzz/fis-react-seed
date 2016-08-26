import oActionType from '../action-type';
import service from 'mock/service';
import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

const oState = Immutable.fromJS({
    oCate: {
        bFetching:false,
        bError: false,
        data: []
    },
    oArticle:{
        bFetching:false,
        bError: false,
        data: []
    }
});

const fTrendReducer = handleActions({
    [oActionType['getCateList.request']]:(state,action) => {
        let s = state.updateIn(['oCate', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [oActionType['getCateList.ok']]:(state,action) => {
       let s = state.updateIn(['oCate', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oCate', 'data'], function(data) {
                return fGetCateList(action.payload.sType,action.payload.sCate);
            });
        return s;
    },
    [oActionType['getCateList.error']]:(state,action) => {
       let s = state.updateIn(['oCate', 'bError'], function(bError) {
                return true;
            });
       return s;
    },
    [oActionType['getArticleList.request']]:(state,action) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [oActionType['getArticleList.ok']]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fGetArticleList(action.payload.sType,action.payload.sCate);
            });
        return s;
    },
    [oActionType['getArticleList.error']]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bError'], function(bError) {
                return true;
            });
       return s;
    },
    [oActionType['searchArticles.request']]:(state,action) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [oActionType['searchArticles.ok']]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fSearchArticles(action.payload.sKeyword);
            });
        return s;
    },
    [oActionType['searchArticles.error']]:(state,action) => {
       let s = state.updateIn(['oArticle', 'bError'], function(bError) {
                return true;
            });
       return s;
    }                                       
},oState);

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

export default fTrendReducer;
