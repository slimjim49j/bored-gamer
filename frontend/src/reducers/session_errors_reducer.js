import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    REMOVE_SESSION_ERRORS
} from '../actions/session_actions';

const _emptyErrors = [];

const SessionErrorsReducer = (state = _emptyErrors, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _emptyErrors;
        case REMOVE_SESSION_ERRORS:
            return _emptyErrors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;