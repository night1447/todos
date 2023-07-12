import React, {FC, useCallback, useState} from "react";
import {ITodoItem} from "../../../types/todo";
import successImage from "../../../assets/success.svg";
import {changeTodoAction} from "../../../store/reducers/todos/actions";
import {useDispatch} from "react-redux";

interface CompletedBoxProps {
    todo: ITodoItem
}

const CompletedBox: FC<CompletedBoxProps> = ({todo}) => {
    const [completed, setCompleted] = useState(todo.timestamps.completedOn.state);
    const dispatch = useDispatch();

    const changeActiveHandler = useCallback(() => {
        setCompleted(prevState => !prevState);
        const currentTodo = {
            ...todo,
            timestamps: {
                ...todo.timestamps,
                completedOn: {
                    ...todo.timestamps.completedOn,
                    state: !todo.timestamps.completedOn.state
                }
            }
        };
        dispatch(changeTodoAction(currentTodo));
    }, [todo]);
    return (
        <div
            onClick={changeActiveHandler}
            className={'absolute left-4 top-0 sm:left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-accent w-16 h-16 border-2 border-accent z-10 transition-all hover:shadow-xl hover:border-yellow'}>
            {completed ?
                <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8'}
                     style={{background: `url(${successImage}) center center/contain no-repeat`}}></div> : <></>}

        </div>
    );
};

export default CompletedBox;
