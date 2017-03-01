import { connect } from 'react-redux';
import ApplicationNav from '../components/ApplicationNav';
import { helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

const mapStateToProps = state => {
  return {
    user: pathToJS(state.firebase, 'auth')
  };
};

export default connect(
  mapStateToProps,
)(ApplicationNav);
