import { createStore } from 'redux';
import { DRAWER_TOGGLE } from '../actions'

const initialState = {
    leftNav: false,
}

const portfolioReducer = (state = initialState, action) => {
    switch(action.type) {
        case DRAWER_TOGGLE:
            let toggleState = {...state, leftNav: !state.leftNav}
            return toggleState;
        default:
            return state;
    }
}

const store = createStore(portfolioReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;