import axios from 'axios';

export const getGames = (pageNum, categories=[], mechanics=[]) => {
    return axios.get(`/api/games/index/${pageNum}`, {
        params: {
            gameNum: 25, 
            categories: categories.join('*'),
            mechanics: mechanics.join('*')
        }
    })
};

export const getOneGame = (gameId) => {
    return axios.get(`/api/games/${gameId}`)
}