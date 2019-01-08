import * as ActionTypes from '../constants/reduxConstants';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
 switch (action.type) {
  case ActionTypes.INCREASE_COUNT:
  let tempCount = state.count;
  return Object.assign({}, state, {
     count: tempCount +1
   });
  default:
   return state
 }
}