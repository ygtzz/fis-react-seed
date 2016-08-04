var createStore = require('redux').createStore;
var rootReducer = require('reducers');

var store = createStore(rootReducer);

module.exports = store;