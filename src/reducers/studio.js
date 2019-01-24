import * as ActionTypes from '../constants/reduxConstants';

const initialState = {
  name: '',
  pages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_STUDIO_NAME:
      return Object.assign({}, state, {
        name: action.value
      });
    case ActionTypes.SET_STUDIO_PAGES:
      return Object.assign({}, state, {
        pages: action.value
      });
    default:
      return state;
  }
};
