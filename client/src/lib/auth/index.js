import auth from './auth';

const requireAuth = (state, replace) => {
  console.log('Required auth?')
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
