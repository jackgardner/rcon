import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormControl, Button } from 'react-bootstrap';

class RegisterForm extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
  }

  register(event) {
    event.preventDefault();

    this.props.register(this.state.email, this.state.password)
  }

  onChange(event) {
    const formEvent = event.target.value;
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state)
  }

  render () {
    return  <form onChange={this.onChange} onSubmit={this.register}>
      <div className="panel panel-body login-form">
        <div className="text-center">
          <div className="icon-object border-success text-success"><i className="icon-plus3"></i></div>
          <h5 className="content-group">Create account <small className="display-block">All fields are required</small></h5>
        </div>

        <div className="content-divider text-muted form-group"><span>Your credentials</span></div>
        <div className="form-group has-feedback has-feedback-left">
          <FormControl name="email" placeholder="email" />
          <div className="form-control-feedback">
            <i className="icon-mention text-muted"></i>
          </div>
        </div>

        <div className="form-group has-feedback has-feedback-left">
          <FormControl name="repeat-email" placeholder="Confirm email" />
          <div className="form-control-feedback">
            <i className="icon-mention text-muted"></i>
          </div>
        </div>

        <div className="form-group has-feedback has-feedback-left">
          <FormControl name="password" placeholder="Password" type="password" />
          <div className="form-control-feedback">
            <i className="icon-user-lock text-muted"></i>
          </div>
        </div>

        <div className="content-divider text-muted form-group"><span>Additions</span></div>

        <div className="checkbox">
          <label>
            <div className="checker"><span><input type="checkbox" className="styled" /></span></div>
            Accept <a href="#">terms of service</a>
          </label>
        </div>
        <Button type="submit" className="bg-pink-400 btn-lg legitRipple">Register <i className="icon-circle-right2 position-right"></i></Button>
      </div>
    </form>

  }
}

export default RegisterForm;
