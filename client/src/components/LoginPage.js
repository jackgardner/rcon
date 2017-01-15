import React, { Component } from 'react';
import LoginForm from './LoginForm';
export default class LoginPage extends Component {
  render() {
    return <div className="login-container bg-slate-800">
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <div className="content">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}
