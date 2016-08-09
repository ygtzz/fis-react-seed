var oActionType = require('../action-type');
var aActionType = oActionType.action;
var aActionStatus = oActionType.status;
var Immutable = require('immutable');

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

module.exports = fRouterReducer;
