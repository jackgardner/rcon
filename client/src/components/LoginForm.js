import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';
export default class LoginForm extends Component {
  constructor () {
    super();
    this.state = {};
    this.onChange = this.onChange.bind(this)
    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }

  onChange(event) {
    const formEvent = event.target.value;
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state)
  }
  render () {
    return <form onChange={this.onChange} onSubmit={this.login}>
      <div className="panel panel-body login-form">

        {this.props.errorMessage}

        <div className="text-center">
          <div className="icon-object border-warning-400 text-wraning-400"><i className="icon-people"></i></div>
          <h5 className="content-group-lg">Login <small className="display-block">Enter your credentials</small></h5>
        </div>

        <div className="form-group has-feedback has-feedback-left">
          <FormControl placeholder="Username" name="username" />
          <div className="form-control-feedback">
            <i className="icon-user text-muted"></i>
          </div>
        </div>

        <div className="form-group has-feedback has-feedback-left">
          <FormControl placeholder="Password" type="password" name="password" />
          <div className="form-control-feedback">
            <i className="icon-lock2 text-muted"></i>
          </div>
        </div>

        <div className="form-group login-options">
          <div className="row">
              <div className="col-sm-6 text-right">
                <a href="login_password_recover.html">Forgot password?</a>
              </div>
            </div>
          </div>

          <div className="form-group">
            <Button type="submit" className="bg-pink-400">
              Login <i className="icon-circle-right2 position-right"></i>
            </Button>
          </div>


          <div className="content-divider text-muted form-group"><span>Don't have an account?</span></div>
          <Link to="/register" className="btn bg-slate btn-block content-group">Register</Link>
          <span className="help-block text-center no-margin">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
        </div>
    </form>;
  }
}
