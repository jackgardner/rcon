import React, { Component } from 'react';
import { browserHistory } from 'react-router';
export default class RequireAuthentication extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    }
  }
  componentDidMount() {
    const { firebase } = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if (!user) return browserHistory.push('/login')
      this.setState({ isLoggedIn: true, user });
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return <div>{React.Children.map(this.props.children, child => React.cloneElement(child, { user: this.state.user }))}</div>
    } else {
      return null;
    }
  }
}