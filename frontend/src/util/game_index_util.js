import axios from 'axios';

export const getGames = (pageNum) => {
    return axios.get(`/api/games/index/${pageNum}`, {
        params: {
            gameNum: 25
        }
    })
};