import { Increament } from "./actionTypes";

export const increamentReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Increament:
      return payload;
    default:
      return state;
  }
};
