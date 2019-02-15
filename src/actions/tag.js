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

export function getPeblsFromTag(value, limit, offset) {
  console.log(value);
  const url = `https://staging-api.peblio.co/api/pages/withTags?tag=${value}&limit=${limit}&offset=${offset}`;
  const tempPebls = {};
  return dispatch => axios.get(url)
    .then((response) => {
      const totalNoPebls = response.data.totalDocs;
      const checkLimit = (totalNoPebls > limit * (offset + 1)) ? limit : totalNoPebls;
      let count = 0;
      response.data.docs.map((pebl, i) => {
        count++;
        tempPebls[pebl.id] = {
          id: pebl.id,
          title: pebl.title,
          tags: pebl.tags,
          updatedAt: pebl.updatedAt,
        };
      });
      if (checkLimit === count) {
        console.log(tempPebls);
        dispatch(setTotalPebls(totalNoPebls));
        dispatch({
          type: ActionTypes.SET_STUDIO_PEBLS,
          value: tempPebls
        });
      }
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

// export function setPeblUser(pebl, id, value) {
//   console.log(value);
//   const url = `https://staging-api.peblio.co/api/pages/withTags?tag=${value}&limit=${limit}&offset=${offset}`;
//   const tempPebls = {};
//   return dispatch => axios.get(url)
//     .then((response) => {
//       const totalNoPebls = response.data.totalDocs;
//       const checkLimit = (totalNoPebls > limit * (offset + 1)) ? limit : totalNoPebls;
//       let count = 0;
//       console.log(checkLimit);
//       response.data.docs.map((pebl, i) => {
//         count++;
//         tempPebls[pebl.id] = {
//           id: pebl.id,
//           title: pebl.title,
//           tags: pebl.tags,
//           updatedAt: pebl.updatedAt,
//           user: pebl.user,
//         };
//       });
//       if (checkLimit === count) {
//         console.log(tempPebls);
//         dispatch({
//           type: ActionTypes.SET_STUDIO_PEBLS,
//           value: tempPebls
//         });
//         dispatch(setTotalPebls(totalNoPebls));
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
