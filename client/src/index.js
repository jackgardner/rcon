import React from 'react';
import { render } from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage.js';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import RequireAuthentication from './containers/RequireAuthentication';
import * as firebase from 'firebase';

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

render(
  <Router createElement={createElement} history={browserHistory}>
    <Route path="/login" component={LoginPage} />
    <Route component={RequireAuthentication}>
      <Route path="/" component={App}>
        <Route path="dashboard" />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
