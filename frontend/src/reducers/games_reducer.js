import {
    RECEIVE_GAMES,
    REPLACE_ALL_GAMES
} from '../actions/game_index_actions';

export default function (state = [], action) {
    Object.freeze(state);
    let nextState = Object.assign([], state);

    switch(action.type) {
        case REPLACE_ALL_GAMES:
            return action.games;
        case RECEIVE_GAMES:
            nextState = nextState.concat(action.games);
            return nextState;
        default:
            return state;
    }
};