import axios from 'axios';

export const getDislikes = (userId, dislike) => {
    return axios.get(`/api/users/${userId}/likes`, {
        params: {
            dislike: dislike
        }
    })
};

export const postLike = (like) => {
  return axios.post(`/api/likes`, like);
};

export const patchLike = (like) => {
    return axios.patch(`/api/likes/${like._id}`, like);
};

export const deleteLike = (likeId) => {
    return axios.delete(`/api/likes/${likeId}`);
};

export const getGameLikes = (gameId) => {
    return axios.get(`/api/games/${gameId}/likes`);
};