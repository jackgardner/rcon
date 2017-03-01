import { combineReducers } from 'redux';
import { UPDATE_CURRENT_PERSON } from '../constants/ActionTypes';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

const initialState = {
  current: {},
  userId: null,
  servers: [],
};

function servers(state = initialState.servers, action) {
  switch (action.type) {
    case UPDATE_CURRENT_PERSON:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

const dashboardApp = combineReducers({
  servers,
  firebase
});

export default dashboardApp;
