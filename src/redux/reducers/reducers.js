import { combineReducers } from "redux";
import cartListReducer from "../reducers/cartListReducer";
import totalReducer from "../reducers/totalReducer"

const reducers = combineReducers({
  cartList: cartListReducer,
  total: totalReducer
});

export default reducers;
