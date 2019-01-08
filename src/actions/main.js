import * as ActionTypes from '../constants/reduxConstants.js';

export function increaseCount() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INCREASE_COUNT,
    });
  };
}

export function decreaseCount() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DECREASE_COUNT,
    });
  };
}
