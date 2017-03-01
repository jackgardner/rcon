import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
class LogoutPage extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    const { firebase } = this.props;
    firebase.logout();
    this.context.router.push('/login');
  }

  render() {
    return null;
  }
}


export default firebaseConnect()(LogoutPage);
