import axios from 'axios';

export const getGames = ({pageNum, categories, mechanics, order, sort}) => {
    return axios.get(`/api/games/index/${pageNum}`, {
        params: {
            gameNum: 25, 
            categories: (categories || []).join('*'),
            mechanics: (mechanics || []).join('*'),
            order,
            sort,
        }
    })
};

export const getOneGame = (gameId) => {
    return axios.get(`/api/games/${gameId}`)
}