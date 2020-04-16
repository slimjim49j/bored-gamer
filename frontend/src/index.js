import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';


import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { login, logout } from './actions/session_actions'; 

import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const currentTime = Date.now() / 1000;
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser, pageNum: 1 } };
        store = configureStore(preloadedState);

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        };
    } else {
        store = configureStore({});
    };
    
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.login = login; 
    window.logout = logout;
    window.getTest = () => {
      return axios.get("/api/likes/test");
    };
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});