import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainPage from './main/main_page_container';
import HeaderContainer from './header/header_container';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';

const App = () => (
    <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;