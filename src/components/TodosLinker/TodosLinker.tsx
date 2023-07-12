import React, {FC, useEffect, useState} from "react";
import Todos from "../Todos/Todos";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Choices from "../Choices/Choices";
import {CHOICES, CHOICES_SELECT, IChoice} from "../../constants/constants";
import {ITodoItem} from "../../types/todo";

const filterTodos = (todos: ITodoItem[], choice: IChoice): ITodoItem[] => {
    switch (choice) {
        case "favourites":
            return todos.filter(item => item.importance);
        case "completed":
            return todos.filter(item => item.timestamps.completedOn.state);
        case "all":
            return todos;
    }
}
const TodosLinker: FC = () => {
    const todos = useTypedSelector(state => state.todos.todos);
    const [choice, setChoice] = useState(CHOICES[0]);

    const [filteredTodos, setFilteredTodos] = useState<ITodoItem[]>(todos);
    const changeChoiceHandler = (value: string) => {
        setChoice(value);
    };
    useEffect(() => {
        const current = CHOICES_SELECT.get(choice);
        const filteredMassive = filterTodos(todos, current || 'all');
        setFilteredTodos(filteredMassive);
    }, [choice, todos])

    return (
        <>
            <Choices choice={choice} className={'mb-16'} onClick={changeChoiceHandler}/>
            <Todos todos={filteredTodos}/>
        </>
    );
};
export default TodosLinker;
