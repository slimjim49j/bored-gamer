import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainPage from './main/main_page_container';
import HeaderContainer from './header/header_container';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import ShowGameContainer from './show_game/show_game_container';
import ShowUserLikesContainer from './show_user/user_like_container';
import ShowUserDislikesContainer from './show_user/user_dislike_container';
import AboutUs from './about_us/about_us';

const App = () => (
    <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/games/:gameId" component={ShowGameContainer} />
            <ProtectedRoute path="/users/:userId/like" component={ShowUserLikesContainer} />
            <ProtectedRoute path="/users/:userId/dislike" component={ShowUserDislikesContainer} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;