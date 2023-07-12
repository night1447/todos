import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodoItem} from "../../../types/todo";

interface IState {
    todos: ITodoItem[]
}

const initialState: IState = {
    todos: [],
};
export const TodoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        deleteTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        addTodo(state, action: PayloadAction<ITodoItem>) {
            state.todos.push(action.payload);
        },
        changeTodo(state, action: PayloadAction<ITodoItem>) {
            state.todos = state.todos.map(item => item.id === action.payload.id ? action.payload : item);
        }
    }
})

