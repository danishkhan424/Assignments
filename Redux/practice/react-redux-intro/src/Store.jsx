import { legacy_createStore, combineReducers } from "redux";

const AddToCart = "AddToCart";
const SET_THEME = "SET_THEME";
const UPDATE_USER = "UPDATE_USER";

// Theme Reducer
function themeReducer(state = "light-mode", { type, payload }) {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
}

// Cart Reducer
function cartReducer(state = [], { type, payload }) {
  switch (type) {
    case AddToCart:
      return [...state, payload];
    default:
      return state;
  }
}
const userState = { username: null, loggedIn: false };
// User Reducer
function userReducer(state = userState, { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
  user: userReducer,
});

export const store = legacy_createStore(rootReducer);
