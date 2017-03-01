import { firebaseConnect } from 'react-redux-firebase';
import RegisterPage from '../components/UserRegistration/RegisterPage';

const mapStateToProps = state => {
  return {
    isLoggedIn: false
  }
};

export default firebaseConnect(
  mapStateToProps,
)(RegisterPage);
