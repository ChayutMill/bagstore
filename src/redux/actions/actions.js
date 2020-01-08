import JwtDecode from "jwt-decode";

export const ADD_CART = "ADD_CART";
export const ADD_TOTAL = "ADD_TOTAL";
export const DELETE_CART = "DELETE_CART";
export const DECREASE_TOTAL = "DECREASE_TOTAL";
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

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

export function deleteCart(id) {
  return {
    type: DELETE_CART,
    id: id
  };
}

export function decreaseTotal(amount) {
  return {
    type: DECREASE_TOTAL,
    amount: amount
  };
}

export function logoutUser() {
  localStorage.removeItem("ACCESS_TOKEN")
  return {
    type: LOGOUT_USER,
  }
}

function fetchLogin(token) {
  localStorage.setItem("ACCESS_TOKEN", token)
}

export function login(token) {
  let user = JwtDecode(token)
  fetchLogin(token)
  return {
    type: LOGIN_USER,
    ...user
  }
}

function fetchLogout() {
  localStorage.removeItem("ACCESS_TOKEN")
}

export function logout() {
  fetchLogout()
  return {
    type: LOGOUT_USER,
  }
}