import keyMirror from 'keymirror';

export default {
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