var articleReducer = require('reducers/article');
var trendReducer = require('reducers/trend');
var combineReducers = require('redux').combineReducers;

module.exports = combineReducers({
    trend: trendReducer,
    article: articleReducer
})