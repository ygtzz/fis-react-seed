var keyMirror = require('keymirror');

module.exports = {
    action: keyMirror({
        'getCateList': '',
        'getArticleList': '',
        'searchArticles': '',
        'getArticleDetail': '',
        '@@router/LOCATION_CHANGE':''
    }),
    status: keyMirror({
        'request':'',
        'response':'',
        'error':''
    })
}