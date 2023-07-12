import {TodoSlice} from "./TodoSlice";
import {ITodoItem} from "../../../types/todo";

const actions = TodoSlice.actions;

export const deleteTodoAction = (todo: ITodoItem) => actions.deleteTodo(todo.id);
export const changeTodoAction = (todo: ITodoItem) => actions.changeTodo(todo);
export const addTodoAction = (todo: ITodoItem) => actions.addTodo(todo);


