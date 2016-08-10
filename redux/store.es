import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

var loggerMiddleware = createLogger();

var store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : function(f){return f;}
    )
);

export default store;