import {
    RECEIVE_GAMES,
    REPLACE_ALL_GAMES
} from '../actions/game_index_actions';

export default function (state = [], action) {
    Object.freeze(state);
    // deep clone?
    let nextState = Object.assign([], state);

    switch(action.type) {
        case REPLACE_ALL_GAMES:
            return action.games;
        case RECEIVE_GAMES:
            nextState.push(action.games)
            return nextState;
        default:
            return state;
    }
};