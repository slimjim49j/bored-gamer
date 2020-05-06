import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const RESET_PAGE_NUM = "RESET_PAGE_NUM";
export const INCREMENT_PAGE_NUM = "INCREMENT_PAGE_NUM";

export const RECEIVE_GAME_COUNT = "RECEIVE_GAME_COUNT";

export const receiveCurrentUser = currentUser => {
    return({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
};

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS,
    errors: []
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const resetPageNum = () => ({
    type: RESET_PAGE_NUM,
});

export const incrementPageNum = () => ({
    type: INCREMENT_PAGE_NUM,
});

export const receiveGameCount = gameCount => ({
    type: RECEIVE_GAME_COUNT,
    gameCount,
})

export const signup = currentUser => dispatch => (
    APIUtil.signup(currentUser).then(() => (
        dispatch(receiveCurrentUser(currentUser))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);


export const login = user => dispatch => {
    return(
        APIUtil.login(user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                APIUtil.setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(receiveCurrentUser(decoded))
            })
            .catch(err => {
                dispatch(receiveErrors(err.response.data));
            })
    )
};


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};