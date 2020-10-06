import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
    searchField: ""
}

export const searchRobots = (state=initialState, action={}) => {
    console.log('reducer.js searchRobots ','state= ', state, 'action =', action);
    console.log('reducer.js action.type', action.type)
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            console.log('case: CHANGE_SEARCH_FIELD');
            return  Object.assign( {}, state, {searchField: action.payload});
        default:
            console.log('case: default');
            console.log('searchRobots ', 'state', state);
            // return  Object.assign( {}, state, {searchField: action.payload});
            return state;
            // return { }
    }
}

