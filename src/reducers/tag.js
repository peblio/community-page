import * as ActionTypes from '../constants/reduxConstants';

const initialState = {
  name: '',
  pebls: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TAG_NAME:
      return Object.assign({}, state, {
        name: action.value
      });
    case ActionTypes.SET_STUDIO_PEBLS:
      return Object.assign({}, state, {
        pebls: action.value
      });
    default:
      return state;
  }
};
