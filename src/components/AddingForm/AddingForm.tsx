import React, {createRef, FC} from "react";
import Field from "../UI/Field/Field";
import Importance from "../Importance/Importance";
import Button from "../UI/Button/Button";
import {v4} from "uuid";
import {addTodoAction} from "../../store/reducers/todos/actions";
import {useDispatch} from "react-redux";
import {ITodoItem} from "../../types/todo";

const AddingForm: FC = () => {
    const formRef = createRef<HTMLFormElement>();
    const todoDispatch = useDispatch();
    const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(formRef.current as HTMLFormElement);
        formRef.current?.reset();
        const todo: ITodoItem = {
            title: `${formData.get("title")}`,
            description: `${formData.get("description")}`,
            importance: formData.get("importance") === 'on',
            id: `${v4()}`,
            timestamps: {
                createdOn: new Date().getDate(),
                modifiedOn: new Date().getDate(),
                completedOn: {
                    date: new Date().getDate(),
                    state: false,
                }
            }
        };
        todoDispatch(addTodoAction(todo));
    };
    return (
        <>
            <h1 className={"text-4xl mb-10 font-bold"}>Добавьте задачу</h1>
            <form onSubmit={addTodoHandler} ref={formRef}
                  className={'flex flex-col items-center w-full mb-12 xl:w-1/2'}>
                <Field type={'text'}
                       name={'title'}
                       title={'Заголовок'}
                       htmlFor={'title'}/>
                <Field type={'textarea'}
                       name={'description'}
                       title={'Описание'}
                       htmlFor={'description'}/>
                <Importance/>
                <Button type={'submit'} variant={'default'} className={'w-full'}>Добавить</Button>
            </form>
        </>
    );
};
export default AddingForm;
