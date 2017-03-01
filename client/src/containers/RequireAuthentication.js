import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { firebaseConnect } from  'react-redux-firebase';
import { helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

class RequireAuthentication extends Component {
  static propTypes = {
    auth: PropTypes.object,
  };
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };


  componentWillMount() {
    const { auth, isAuthenticating } = this.props;
    console.log('auth', isAuthenticating);
    console.log(this.context);
    if (!isAuthenticating && auth && !auth.uid) {
      this.context.router.push('/login');
    }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}

const mapStateToProps = state => {
  return {
    auth: pathToJS(state.firebase, 'auth'),
    isAuthenticating: pathToJS(state.firebase, 'isInitializing') === true,
  }
};

export default connect(
  mapStateToProps,
)(RequireAuthentication);
