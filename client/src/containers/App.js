import React, { Component } from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { FIREBASE_CONFIG } from '../config';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import DevTools from '../utils/devTools';
import Application from '../components/Application';
import reducers from '../reducers';
import { reduxFirebase } from 'react-redux-firebase';
import { Router, Route, browserHistory } from 'react-router';
import RequireAuthentication from '../containers/RequireAuthentication';
import LoginPage from '../containers/LoginPage.js';
import RegisterPage from '../containers/RegisterPage';
import DashboardPage from '../components/Dashboard/DashboardPage';
import LogoutPage from '../containers/LogoutPage';

const logger = createLogger();

const enhancer = compose(
  reduxFirebase(FIREBASE_CONFIG),
  applyMiddleware(thunk,  logger),
  DevTools.instrument(),
  persistState(getDebugSessionKey()),
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const store = createStore(reducers, enhancer);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={RequireAuthentication}>
              <Route component={Application}>
                <Route path="/logout" component={LogoutPage} />
                <Route path="/" component={DashboardPage} />
              </Route>
            </Route>
          </Router>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}
