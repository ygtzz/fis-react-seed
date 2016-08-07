var keyMirror = require('keymirror');

module.exports = {
    action: keyMirror({
        'getCateList': '',
        'getArticleList': '',
        'searchArticles': '',
        'getArticleDetail': ''
    }),
    status: keyMirror({
        'request':'',
        'response':'',
        'error':''
    })
}