import { Component } from 'react';
import { browserHistory } from 'react-router';
export default class RequireAuthentication extends Component {
  componentDidMount() {

    browserHistory.push('/login')
  }

  render() {
    return null;
  }
}
