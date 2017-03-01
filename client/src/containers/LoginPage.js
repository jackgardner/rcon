import { firebaseConnect } from 'react-redux-firebase';
import LoginPage from '../components/LoginPage';

const mapStateToProps = state => {
  return {
    isLoggedIn: false
  }
};

export default firebaseConnect()(LoginPage);
