import service from 'mock/service';
import Immutable from 'immutable';
import {createReducer} from 'redux-act';
import actions from '../actions';

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

const fTrendReducer = createReducer({
    [actions.fGetCateListRequest]:(state,payload) => {
        let s = state.updateIn(['oCate', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [actions.fGetCateListOk]:(state,payload) => {
       let s = state.updateIn(['oCate', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oCate', 'data'], function(data) {
                return fGetCateList(payload.sType,payload.sCate);
            });
        return s;
    },
    ['getCateListOk.error']:(state,payload) => {
       let s = state.updateIn(['oCate', 'bError'], function(bError) {
                return true;
            });
       return s;
    },
    [actions.fGetArticleListRequest]:(state,payload) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [actions.fGetArticleListOk]:(state,payload) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fGetArticleList(payload.sType,payload.sCate);
            });
        return s;
    },
    ['getArticleList.error']:(state,payload) => {
       let s = state.updateIn(['oArticle', 'bError'], function(bError) {
                return true;
            });
       return s;
    },
    [actions.fSearchArticlesRequest]:(state,payload) => {
        let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return true;
            });
        return s;
    },
    [actions.fSearchArticlesOk]:(state,payload) => {
       let s = state.updateIn(['oArticle', 'bFetching'], function(bFetching) {
                return false;
            });
            s = state.updateIn(['oArticle', 'data'], function(data) {
                return fSearchArticles(payload.sKeyword);
            });
        return s;
    },
    ['searchArticles.error']:(state,payload) => {
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
