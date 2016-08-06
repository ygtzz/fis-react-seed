var articleReducer = require('reducers/article');
var trendReducer = require('reducers/trend');
var combineReducers = require('redux').combineReducers;
var reactRouterRedux = require('react-router-redux');
var routerReducer = reactRouterRedux.routerReducer;

module.exports = combineReducers({
    trend: trendReducer,
    article: articleReducer,
    routing: routerReducer
})