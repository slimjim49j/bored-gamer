import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    INCREMENT_PAGE_NUM,
    RESET_PAGE_NUM,
    RECEIVE_DESTINATION,
} from '../actions/session_actions';

import {
    RECEIVE_GAMES,
    REPLACE_ALL_GAMES,
} from "../actions/game_index_actions";

const initialState = {
    isAuthenticated: false,
    user: {},
    pageNum: 1,
    gameCount: 0,
    destination: null,
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
            nextState.isAuthenticated = initialState.isAuthenticated;
            nextState.user = initialState.user;
            return nextState;
        case INCREMENT_PAGE_NUM:
            nextState.pageNum += 1;
            return nextState;
        case RESET_PAGE_NUM:
            nextState.pageNum = 1;
            return nextState;

        case RECEIVE_GAMES:
        case REPLACE_ALL_GAMES:
            nextState.gameCount = action.games.gameCount;
            return nextState;

        case RECEIVE_DESTINATION:
            nextState.destination = action.destination;
            return nextState;
            
        default:
            return state;
    }
};