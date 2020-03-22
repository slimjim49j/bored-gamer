import { combineReducers } from 'redux';

import users from './users_reducer';
import games from './games_reducer';

export default combineReducers({
    users,
    games,
});
