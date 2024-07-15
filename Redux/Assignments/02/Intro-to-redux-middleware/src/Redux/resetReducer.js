import { Reset } from "./actionTypes";

export const resetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Reset:
      return 0;
    default:
      return state;
  }
};
