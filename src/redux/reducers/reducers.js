import { combineReducers } from "redux";
import cartListReducer from "../reducers/cartListReducer";
import totalReducer from "../reducers/totalReducer"
import userReducer from './userReducer'

const reducers = combineReducers({
  cartList: cartListReducer,
  total: totalReducer,
  user: userReducer,
});

export default reducers;
