import { createStore, combineReducers } from 'redux';

import login from './reducer/login';

const rootState = combineReducers({
    login
})

export const store = createStore(rootState);

