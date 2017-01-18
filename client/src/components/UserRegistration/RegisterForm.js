import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';
export default class RegisterForm extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      password: ''
    };


    this.updatePassword = this.updatePassword.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }

  updateUsername (event) {
    this.setState({ username: event.target.value })
  }

  updatePassword (event) {
    this.setState({ password: event.target.value })
  }

  render () {
    return  <form>
      <div className="panel panel-body login-form">
        <div className="text-center">
          <div className="icon-object border-success text-success"><i className="icon-plus3"></i></div>
          <h5 className="content-group">Create account <small className="display-block">All fields are required</small></h5>
        </div>

        <div className="content-divider text-muted form-group"><span>Your credentials</span></div>

        <div className="form-group has-feedback has-feedback-left">
          <input type="text" className="form-control" placeholder="Eugene" />
            <div className="form-control-feedback">
              <i className="icon-user-check text-muted"></i>
            </div>
            <span className="help-block text-danger"><i className="icon-cancel-circle2 position-left"></i> This username is already taken</span>
          </div>

          <div className="form-group has-feedback has-feedback-left">
            <input type="text" className="form-control" placeholder="Create password" />
              <div className="form-control-feedback">
                <i className="icon-user-lock text-muted"></i>
              </div>
            </div>

            <div className="content-divider text-muted form-group"><span>Your privacy</span></div>

            <div className="form-group has-feedback has-feedback-left">
              <input type="text" className="form-control" placeholder="Your email" />
                <div className="form-control-feedback">
                  <i className="icon-mention text-muted"></i>
                </div>
              </div>

              <div className="form-group has-feedback has-feedback-left">
                <input type="text" className="form-control" placeholder="Repeat email" />
                  <div className="form-control-feedback">
                    <i className="icon-mention text-muted"></i>
                  </div>
                </div>

                <div className="content-divider text-muted form-group"><span>Additions</span></div>

                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <div className="checker"><span className="checked"><input type="checkbox" className="styled" checked="checked" /></span></div>
                        Send me <a href="#">test account settings</a>
                      </label>
                    </div>

                    <div className="checkbox">
                      <label>
                        <div className="checker"><span className="checked"><input type="checkbox" className="styled" checked="checked" /></span></div>
                          Subscribe to monthly newsletter
                        </label>
                      </div>

                      <div className="checkbox">
                        <label>
                          <div className="checker"><span><input type="checkbox" className="styled" /></span></div>
                            Accept <a href="#">terms of service</a>
                          </label>
                        </div>
                      </div>

                      <button type="submit" className="btn bg-pink-400 btn-block btn-lg legitRipple">Register <i className="icon-circle-right2 position-right"></i></button>
                    </div>
                  </form>
                  }
                  }
