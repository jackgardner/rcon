import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';
export default class LoginForm extends Component {
  constructor() {
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

  render() {
    return <form onChange={this.onChange} onSubmit={this.login}>
      <div className="panel panel-body login-form">

        {this.props.errorMessage}

        <div className="text-center">
          <div className="icon-object border-slate-300 text-slate-300"><i className="icon-reading"></i></div>
          <h5 className="content-group">
            Login
            <small className="display-block">Enter your credentials</small>
          </h5>
        </div>

        <div className="form-group has-feedback has-feedback-left">
          <FormControl placeholder="Username" name="username"/>
          <div className="form-control-feedback">
            <i className="icon-user text-muted"></i>
          </div>
        </div>

        <div className="form-group has-feedback has-feedback-left">
          <FormControl placeholder="Password" type="password" name="password"/>
          <div className="form-control-feedback">
            <i className="icon-lock2 text-muted"></i>
          </div>
        </div>


        <div className="form-group">
          <Button block type="submit" className="bg-slate legitRipple">
            Sign in <i className="icon-circle-right2 position-right"></i>
          </Button>
        </div>


        <div className="text-center">
          <Link to="/register" className="">Register</Link> | <a href="login_password_recover.html">Forgot password?</a>
        </div>
        <span className="help-block text-center no-margin">By continuing, you're confirming that you've read our <a
          href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
      </div>
    </form>
  ;
  }
  }
