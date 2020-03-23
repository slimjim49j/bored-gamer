import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    INCREMENT_PAGE_NUM,
    RESET_PAGE_NUM
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {},
    pageNum: 1,
};

export default function (state = initialState, action) {
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return initialState;
        case INCREMENT_PAGE_NUM:
            nextState.pageNum += 1;
            return nextState;
        case RESET_PAGE_NUM:
            nextState.pageNum = 1;
            return nextState;
        default:
            return state;
    }
};