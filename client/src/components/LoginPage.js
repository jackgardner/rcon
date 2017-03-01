import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { browserHistory } from 'react-router';

export default class LoginPage extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      errorCode: null,
      errorMessage: null
    }
    this.login = this.login.bind(this);
  }

  login(username, password) {
    const { firebase } = this.props;
    firebase.login({ email: username, password })
      .then(() => {
        this.context.router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        this.setState({ errorCode, errorMessage });
      });
  }

  render() {
    return <div className="login-container">
      <div className="page-container">
        <div className="page-content">
          <div className="content-wrapper">
            <LoginForm errorMessage={this.state.errorMessage} login={this.login}/>
          </div>
        </div>
      </div>
    </div>
  }
}
