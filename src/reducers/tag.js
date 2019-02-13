import * as ActionTypes from '../constants/reduxConstants';

const initialState = {
  name: '',
  pebls: [],
  totalPebls: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TAG_NAME:
      return Object.assign({}, state, {
        name: action.value,
        pebls: []
      });

    case ActionTypes.SET_STUDIO_PEBLS:
      return Object.assign({}, state, {
        pebls: state.pebls.concat(action.value)
      });

    case ActionTypes.SET_TOTAL_PEBLS:
      return Object.assign({}, state, {
        totalPebls: action.value
      });

    default:
      return state;
  }
};
