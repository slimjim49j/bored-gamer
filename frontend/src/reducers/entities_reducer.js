import { combineReducers } from 'redux';

import games from './games_reducer';
import likes from './likes_reducer';

export default combineReducers({
    games,
    likes,
});
