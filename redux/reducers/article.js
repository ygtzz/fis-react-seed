var types = require('action-type');

var oState = {
    article: { 'content': '' }
}

function fArticleReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    switch(action.type){
        case types['getArticleDetail']:

            break;
        default:
            return state;
    }

}

function fGetArticleDetail(store,id) {
    var article = service.getArticleDetail(id, function(article) {
        store.dispatch(types['getArticleDetail'],article);
    })
}

module.exports = fGetArticle;
