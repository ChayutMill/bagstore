export const ADD_CART = "ADD_CART";
export const ADD_TOTAL = "ADD_TOTAL";

export function addCart(product, quantity) {
  return {
    type: ADD_CART,
    product: product,
    quantity: quantity
  };
}

export function addTotal(amount) {
  return {
    type: ADD_TOTAL,
    amount: amount
  };
}
