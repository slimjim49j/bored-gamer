import axios from "axios";

export const getCategories = () => {
    return axios.get('/api/games/categories')
};

export const getMechanics = () => {
    return axios.get('/api/games/mechanics')
};

