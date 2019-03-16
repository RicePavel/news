import {Map} from "immutable";
import {createStore} from 'redux';

/*
 * auth
 */
var reducer = function(state = Map(), action) {
    switch (action.type) {
        case 'LOGIN':
            return state.update('auth', true);
            break;
        case 'LOGOUT':
            return state.update('auth', false);
            break;
    }
    return state;
}

const store = createStore(reducer);

export {reducer, store};

