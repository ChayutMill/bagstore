import { ADD_CART } from "../actions/actions";

function cartListReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART:
      const isFound = state.find(product => product.id == action.product.id);
      if (isFound) {
        for(let product of state){
          if(product.id == isFound.id){
            product.quantity += action.quantity
          }
        }
        return state;
      } else {
        let product_with_quantity = Object.assign(
          {},
          { quantity: action.quantity },
          action.product
        );
        return [...state, product_with_quantity];
      }
    default:
      return state;
  }
}

export default cartListReducer;
