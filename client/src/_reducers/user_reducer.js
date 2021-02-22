import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload } //action.payload에 모든 유저 정보가 들어있음.
        default:
            return state;
    }
}