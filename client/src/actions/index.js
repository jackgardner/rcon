import {
  UPDATE_CURRENT_PERSON
} from '../constants/ActionTypes';

export function setCurrentPerson(currentPerson) {
  return {
    type: UPDATE_CURRENT_PERSON,
    data: currentPerson
  };
};


export function fetchInitialData() {
  return async (dispatch, getState) => {
      return await Promise.all([


      ]);
  };
};
