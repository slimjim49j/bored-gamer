import * as GameIndexUtil from '../util/game_index_util';

export const REPLACE_ALL_GAMES = "REPLACE_ALL_GAMES";
export const RECEIVE_GAMES = "RECEIVE_GAMES";

const replaceAllGames = games => ({
    type: REPLACE_ALL_GAMES,
    games,
});

const receiveGames = games => ({
    type: RECEIVE_GAMES,
    games,
});

export const getInitialGames = (pageNum, categories, mechanics) => dispatch => (
    GameUtil.GameIndexUtil.getGames(pageNum, categories, mechanics)
        .then(games => dispatch(replaceAllGames(games)))
        .catch(err => console.log(err))
);

export const getMoreGames = (pageNum, categories, mechanics) => dispatch => (
    GameUtil.GameIndexUtil.getGames(pageNum, categories, mechanics)
        .then(games => dispatch(receiveGames(games)))
        .catch(err => console.log(err))
);