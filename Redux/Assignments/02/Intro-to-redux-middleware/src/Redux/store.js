import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { increamentReducer } from "./increamentReducer";
import { decreamentReducer } from "./decreamentReducer";
import { resetReducer } from "./resetReducer";

const rootReducer = combineReducers({
    increament: increamentReducer,
    decreament: decreamentReducer,
    reset: resetReducer,
})

export const store = legacy_createStore(rootReducer);