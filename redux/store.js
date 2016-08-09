var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var compose = redux.compose;
var rootReducer = require('reducers');
var thunkMiddleware = require('redux-thunk');
var createLogger = require('redux-logger');

var loggerMiddleware = createLogger();

var store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : function(f){return f;}
    )
);

module.exports = store;