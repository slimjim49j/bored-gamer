import { getGameLikes, postLike, patchLike, deleteLike } from "../util/dislike_util";

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveAllLikes = likes => ({
    type: RECEIVE_ALL_LIKES,
    likes,
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like,
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId,
});

export const fetchAllLikes = gameId => dispatch => getGameLikes(gameId)
    .then(likes => dispatch(receiveAllLikes(likes.data)));

export const createLike = like => dispatch => postLike(like)
    .then(like => dispatch(receiveLike(like.data)));

export const updateLike = like => dispatch => patchLike(like)
    .then(like => dispatch(receiveLike(like.data)));

export const destroyLike = likeId => dispatch => deleteLike(likeId)
    .then(like => dispatch(removeLike(like.data._id)));