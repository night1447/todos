import React, {FC, useCallback, useReducer, useState} from "react";
import {useDispatch} from "react-redux";
import {ITodoItem} from "../../types/todo";
import {changeTodoAction, deleteTodoAction} from "../../store/reducers/todos/actions";
import Flag from "../UI/Flag/Flag";
import Modal from "../UI/Modal/Modal";
import TodoButtons from "./TodoButtons/TodoButtons";
import CompletedBox from "./CompletedBox/CompletedBox";
import {initialModalState, modalReducer} from "./TodoModal";

interface TodoItemProps {
    todo: ITodoItem
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [modification, setModification] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [importance, setImportance] = useState(todo.importance);
    const [modalSettings, modalSettingsDispatch] = useReducer(modalReducer, initialModalState);
    const dispatch = useDispatch();
    const closeModalHandler = () => {
        modalSettingsDispatch({
            type: 'CLOSE_MODAL',
            payload: {showModal: false, message: ''}
        });
    }
    const saveChangesHandler = () => {
        if (title.length === 0) {
            const message = 'Заполните поле заголовка, оставлять пустым нельзя';
            modalSettingsDispatch({type: 'CHANGE_ALL', payload: {message: message, showModal: true}});
            return;
        }
        const currentTodo: ITodoItem = {
            title: title,
            description: description,
            importance: importance,
            id: todo.id,
            timestamps: {
                ...todo.timestamps,
                modifiedOn: new Date().getDate(),
            }
        };
        dispatch(changeTodoAction(currentTodo));
        setModification(false);
    }

    const changeImportanceHandler = useCallback(() => {
        setImportance(prevState => !prevState);
        const currentTodo = {
            ...todo,
            importance: !todo.importance,
        };
        dispatch(changeTodoAction(currentTodo));
    }, [todo]);

    return (
        <li className={"relative flex flex-col shadow-xl text-2xl"}>
            <CompletedBox todo={todo}/>
            <div className="relative py-5 px-5 pl-12 pr-12 sm:pl-8 bg-accent text-white text-3xl font-bold">
                {modification ?
                    <input className={'outline-none w-10/12 bg-light-accent text-accent'}
                           minLength={2}
                           type={"text"}
                           defaultValue={title}
                           onChange={(event) => setTitle(event.target.value)}/> :
                    <h2 className={'break-words'}>{todo.title}</h2>
                }
                <Flag className={'absolute top-1/4 right-0'} onClick={changeImportanceHandler} active={importance}/>
            </div>
            <div className={'flex flex-col grow px-5 py-5'}>
                {modification ? <textarea
                        minLength={2}
                        className={'mb-10 resize-none w-full grow outline-none bg-light-accent text-accent'}
                        onChange={(event) => setDescription(event.target.value)}
                        defaultValue={description}></textarea>
                    :
                    <p className={"mb-10 break-words grow"}>{todo.description}</p>
                }
                <TodoButtons modification={modification}
                             onSave={saveChangesHandler}
                             onDelete={() => dispatch(deleteTodoAction(todo))}
                             endModification={() => setModification(false)}
                             startModification={() => setModification(true)}/>
            </div>
            {modalSettings.showModal ?
                <Modal message={modalSettings.message}
                       closeModal={closeModalHandler}/> : <></>}
        </li>)
}
export default TodoItem;
