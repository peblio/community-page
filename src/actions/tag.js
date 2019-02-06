import * as ActionTypes from '../constants/reduxConstants.js';
import axios from '../utils/axios';

export function setTagName(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_TAG_NAME,
      value
    });
  };
}

export function getPeblsFromTag(value) {
  const url = `https://staging-api.peblio.co/api/pages/withTags?tag=${value}&limit=8`;
  const tempPebls = [];
  return dispatch => axios.get(url)
    .then((response) => {
      response.data.map((pebl, i) => {
        const totalPebls = response.data.length;
        axios.get(`https://staging-api.peblio.co/api/users/${pebl.user}`)
          .then((response) => {
            tempPebls.push({
              title: pebl.title,
              tags: pebl.tags,
              updatedAt: pebl.updatedAt,
              author: response.data.name
            });
            if (tempPebls.length === totalPebls) {
              return dispatch({
                type: ActionTypes.SET_STUDIO_PEBLS,
                value: tempPebls
              });
            }
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function setStudioPebls(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_STUDIO_PEBLS,
      value
    });
  };
}
