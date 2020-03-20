import * as GameUtil from '../util/game_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_MECHANIC = "RECEIVE_MECHANIC";

const receiveCategory = () => ({
    type: RECEIVE_CATEGORY
});

const receiveMechanic = () => ({
    type: RECEIVE_MECHANIC
});

export const getCategories = () => dispatch => (
    GameUtil.getCategories()
        .then(() => dispatch(receiveCategory()))
        .catch(err => console.log(err))
);

export const getMechanics = () => dispatch => (
    GameUtil.getMechanics()
        .then(() => dispatch(receiveMechanic()))
        .catch(err => console.log(err))
);
