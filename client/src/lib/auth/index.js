import auth from './auth';

const requireAuth = (state, replace) => {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: state.location.pathname }
    });
  }
}

export default {
  requireAuth
}
