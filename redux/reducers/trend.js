var types = require('action-type');

var oState = {
    cates:[],
    articles:[]
}

function fTrendReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    switch(action.type){
        case types['getCateList']:
            break;
        case types['getArticleList']:
            break;
        case types['searchArticles']:
            break;
        default:
            return state;
    }
}

function fGetCateList(store,type,cate){
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
    store.dispatch(types['getCateList'],list);
}

function fGetArticleList (store,type,cate) {
    service.getArticleList(type,cate,function(articles){
        store.dispatch(types['getArticleList'],articles);
    })
}

function fSearchArticles(store,keyword){
    service.searchArticles(keyword,function(articles){
        store.dispatch(types['searchArticles'],articles);
    })
}

module.exports = fTrendReducer;
