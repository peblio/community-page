import * as ActionTypes from '../constants/reduxConstants';

const initialState = {
  name: '',
  pebls: {},
  totalPebls: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TAG_NAME:
      return Object.assign({}, state, {
        name: action.value,
        pebls: {}
      });

    case ActionTypes.SET_STUDIO_PEBLS:
      const tempPebls = state.pebls;
      Object.assign(tempPebls, action.value);
      console.log(tempPebls);
      return Object.assign({}, state, {
        pebls: tempPebls
      });

    case ActionTypes.SET_TOTAL_PEBLS:
      return Object.assign({}, state, {
        totalPebls: action.value
      });

    default:
      return state;
  }
};
