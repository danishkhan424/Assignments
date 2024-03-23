import { Fetch_Failure, Fetch_Request, Fetch_Success, Page } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
    page: 1,
  total_pages: 0,
};


export const fetchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
      case Fetch_Request:
          return {
              ...state, isLoading: true
          }
      case Fetch_Success:
          return {
              ...state, isLoading: false, footballMatches: payload.footballMatches, total_pages: payload.total_pages
          }
      case Fetch_Failure:
          return {
              
              ...state, isLoading: false, isError: true
          }
      case Page:
          return {
              ...state, page: payload
          }
      default:
          return state
  }
}
