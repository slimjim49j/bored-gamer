import axios from 'axios';

export const getDislikes = (userId, dislike) => {
    return axios.get(`/api/users/${userId}/likes`, {
        params: {
            dislike: dislike
        }
    })
};

export const createLike = (like) => {
  return axios.post(`/api/likes`, like);
}; 