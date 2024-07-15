import { Decreament } from "./actionTypes";

export const decreamentReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Decreament:
      return payload;
    default:
      return state;
  }
};
