import {action as aActionType,status as aActionStatus} from '../action-type';
import service from 'mock/service';
import Immutable from 'immutable';

var oState = Immutable.fromJS({ 
    routing:{}
});

function fRouterReducer(state,action) {
    if(state === undefined){
        return oState;
    }
    var st = state;
    switch(action.type){
        case aActionType['@@router/LOCATION_CHANGE']:
            st = fRouterHandler(state,action);
            break;
        default:
            break;
    }
    return st;
}

function fRouterHandler(state,action) {
    var s = state;
    s = s.set("routing", {locationBeforeTransitions: action.payload})
    return s;
}

export default fRouterReducer;
