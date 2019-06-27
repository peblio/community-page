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

export function getPeblsFromTag(value, limit, offset, withStudents) {
  const url = `https://api.peblio.co/api/pages/withTags?tag=${value}&limit=${limit}&offset=${offset}&showStudentPages=${withStudents}`;
  const tempPebls = [];
  return dispatch => axios.get(url)
    .then((response) => {
      const totalNoPebls = response.data.totalDocs;
      const checkLimit = (totalNoPebls > limit * (offset + 1)) ? limit : totalNoPebls;
      response.data.docs.map((pebl, i) => {
        tempPebls.push({
          description: pebl.description,
          id: pebl.id,
          title: pebl.title,
          tags: pebl.tags,
          updatedAt: pebl.updatedAt,
          user: pebl.user
        });
      });
      dispatch(setTotalPebls(totalNoPebls));
      dispatch({
        type: ActionTypes.SET_STUDIO_PEBLS,
        value: tempPebls
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function setTotalPebls(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_TOTAL_PEBLS,
      value
    });
  };
}
