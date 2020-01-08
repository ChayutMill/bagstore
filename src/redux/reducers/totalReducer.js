import { ADD_TOTAL, DECREASE_TOTAL } from "../actions/actions";

function totalReducer(state = 0, action) {
  switch (action.type) {
    case ADD_TOTAL:
      return state + action.amount
    case DECREASE_TOTAL:
      return state - action.amount
    default:
      return state;
  }
}

export default totalReducer;