import React, {FC} from "react";
import TodoItem from "../TodoItem/TodoItem";
import {ITodoItem} from "../../types/todo";

interface TodosProps {
    todos: ITodoItem[]
}

const Todos: FC<TodosProps> = ({todos}) => {
    if (todos.length === 0) {
        return <p className={'text-3xl text-center'}>Список пуст</p>
    }
    return (
        <ul className={"grid w-full align-top  grid-cols-1  md:grid-cols-tablet xl:grid-cols-fill justify-center gap-12"}>
            {
                todos.map(item =>
                    <TodoItem todo={item} key={item.id}/>)
            }
        </ul>
    )
}
export default Todos;
