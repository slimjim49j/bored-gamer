import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainPage from './main/main_page';
import Header from './header/header';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';

const App = () => (
    <div>
        <Route path="/" component={Header} />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;