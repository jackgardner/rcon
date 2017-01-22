import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { browserHistory } from 'react-router';
import firebase from '../services/firebase';

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      errorCode: null,
      errorMessage: null
    }
    this.login = this.login.bind(this);
  }

  login(username, password) {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(() => {
        browserHistory.push('/');
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      this.setState({ errorCode, errorMessage });
    });
  }

  render() {
    return <div className="login-container bg-slate-800">
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <div className="content">
                <LoginForm errorMessage={this.state.errorMessage} login={this.login}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}
