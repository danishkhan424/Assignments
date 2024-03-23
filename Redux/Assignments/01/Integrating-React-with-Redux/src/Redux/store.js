import { combineReducers, legacy_createStore } from "redux";
import { todoReducer } from "./todoReducer";
import { fetchReducer } from "./fetchReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    fetch: fetchReducer
})


export const store = legacy_createStore(rootReducer)