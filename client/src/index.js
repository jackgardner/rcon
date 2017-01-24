import React from 'react';
import { render } from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/UserRegistration/RegisterPage';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import RequireAuthentication from './containers/RequireAuthentication';
import * as firebase from 'firebase';

/*import primusClient from '../config/primus';


primusClient.connect('http://localhost:8080')*/

const firebaseConfig = {
  apiKey: "AIzaSyAfINhgtzSOFR20cmX6bDJe_E3jF9JN2x8",
  authDomain: "gamestalker-ef285.firebaseapp.com",
  databaseURL: "https://gamestalker-ef285.firebaseio.com",
  storageBucket: "gamestalker-ef285.appspot.com",
  messagingSenderId: "862177034317"
};

firebase.initializeApp(firebaseConfig);

// Hacky as shit
const createElement = (Component, props) => {
  return <Component {...props} firebase={firebase} />;
}

const logout = () => {
  return firebase.auth().signOut().then(() => browserHistory.push('/login'));
}



render(
  <Router createElement={createElement} history={browserHistory}>
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
