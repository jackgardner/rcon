import React from 'react';
import { render } from 'react-dom';
import App from './App';
import LoginPage from './components/LoginPage.js';
import './index.css';
import { requireAuth } from './lib/auth';
import { Router, Route, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginPage} />
      <Route path="dashboard" onEnter={requireAuth} />
    </Route>
  </Router>,
  document.getElementById('root')
);
