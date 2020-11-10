import {GET_USER_INFO, SET_USER_INFO, UserInfo} from '../actionTypes/login';

const initialState: UserInfo = {
    user_name: '',
    password: ''
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return Object.assign({}, state)
        case SET_USER_INFO:
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}
