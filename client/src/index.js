import React from 'react';
import { render } from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/UserRegistration/RegisterPage';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import RequireAuthentication from './containers/RequireAuthentication';
import firebase from './services/firebase.js';

import primusClient from '../config/primus';


primusClient.connect('http://localhost:8080')


const logout = () => {
  return firebase.auth().signOut().then(() => browserHistory.push('/login'));
}



render(
  <Router history={browserHistory}>
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route component={RequireAuthentication}>
      <Route path="/" component={App}>
        <Route path="logout" component={logout} />
        <Route path="dashboard" />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
