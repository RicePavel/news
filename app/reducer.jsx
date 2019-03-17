import {Map} from "immutable";
import {createStore} from 'redux';

/*
 * auth
 */
var reducer = function(state = Map(), action) {
    switch (action.type) {
        case 'LOGIN':
            state = state.set('auth', true);
            return state;
            break;
        case 'LOGOUT':
            return state.set('auth', false);
            break;
    }
    return state;
}

const store = createStore(reducer);

export {reducer, store};

