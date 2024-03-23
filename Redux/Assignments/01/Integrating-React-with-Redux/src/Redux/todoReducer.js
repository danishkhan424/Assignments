import { AddTodo, DeleteTodo } from "./actionTypes";

export const todoReducer = (state = [], {type, payload}) => {

    switch (type) {
        case AddTodo:
            return [...state, payload];
        case DeleteTodo:
            return state.filter((todo) => todo.id !== payload);
        default:
            return state;
        
    }
    
}