import * as ActionTypes from '../constants/reduxConstants.js';

export function setStudioName(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_STUDIO_NAME,
      value
    });
  };
}

export function setStudioPages(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_STUDIO_PAGES,
      value
    });
  };
}
