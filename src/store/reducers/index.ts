import {combineReducers} from "redux";
import todoReducer from './todos/reducer'

export const rootReducer = combineReducers(
    {
        todos: todoReducer,

    }
)
export type RootState = ReturnType<typeof rootReducer>;
