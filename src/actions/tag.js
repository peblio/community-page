import * as ActionTypes from '../constants/reduxConstants.js';

export function setTagName(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_TAG_NAME,
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
