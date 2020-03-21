import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainPage from './main/main_page_container';
import HeaderContainer from './header/header_container';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import ShowGameContainer from './show_game/show_game_container';
import ShowUserContainer from './show_user/show_user_container';

const App = () => (
    <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <ProtectedRoute path="/games/:gameId" component={ShowGameContainer} /> */}
            {/* Test route for individual game */}
            <ProtectedRoute path="/game" component={ShowGameContainer} />
            <ProtectedRoute path="/users/:userId" component={ShowUserContainer} />
            <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;