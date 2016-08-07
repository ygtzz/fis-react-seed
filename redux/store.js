var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var rootReducer = require('reducers');
var thunkMiddleware = require('redux-thunk');
var createLogger = require('redux-logger');

var loggerMiddleware = createLogger();

var store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware//,
        //loggerMiddleware
    )
);

module.exports = store;