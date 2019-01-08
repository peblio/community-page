import * as ActionTypes from '../constants/reduxConstants';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};
