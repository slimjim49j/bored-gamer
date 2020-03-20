import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainPage from './main/main_page';
import HeaderContainer from './header/header_container';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';

import CategoryCheckBoxContainer from './checkbox/category_checkbox_container';
import MechanicCheckBoxContainer from './checkbox/mechanic_checkbox_container';

const App = () => (
    <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={MainPage} />

            {/* import Category and Mechanic directly into MainPage component soon */}
            <Route exact path='/abc' component={CategoryCheckBoxContainer} />
            <Route exact path='/def' component={MechanicCheckBoxContainer} />
        </Switch>
    </div>
);

export default App;