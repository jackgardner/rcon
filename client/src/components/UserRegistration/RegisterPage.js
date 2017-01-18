import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { browserHistory } from 'react-router';

export default class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      errorCode: null,
      errorMessage: null
    }
    this.register = this.register.bind(this);
  }

  register(email, password) {
    const { firebase } = this.props;

    firebase.auth().createUserWithEmailAndPassword(email, password)
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
                <RegisterForm errorMessage={this.state.errorMessage} register={this.register}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}
