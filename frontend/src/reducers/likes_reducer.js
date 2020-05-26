import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const initialState = {

}

export default (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch (action.type) {

    case RECEIVE_ALL_LIKES:
        nextState = {};
        // debugger
        action.likes.forEach(like => {
            const { userId, username, likes } = like;
            const newLike = Object.assign({userId, username}, likes);
            nextState[newLike._id] = newLike;
        });
        return nextState;

    case RECEIVE_LIKE:
        const like = action.like;
        nextState[like._id] = like;
        return nextState;

    case REMOVE_LIKE:
        delete nextState[action.likeId];
        return nextState;

    default:
        return nextState;
    }
}
