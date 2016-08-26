import articleReducer from 'reducers/article';
import trendReducer from 'reducers/trend';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    trend: trendReducer,
    article: articleReducer,
    routing: routerReducer
})