import * as ActionTypes from '../constants/reduxConstants.js';

export function increaseCount() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INCREASE_COUNT
    });
  };
}