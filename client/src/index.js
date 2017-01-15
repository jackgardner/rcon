import React from 'react';
import { render } from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage.js';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import RequireAuthentication from './containers/RequireAuthentication';

render(
  <Router history={browserHistory}>
    <Route path="/login" component={LoginPage} />
    <Route component={RequireAuthentication}>
      <Route path="/" component={App}>
        <Route path="dashboard" />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
