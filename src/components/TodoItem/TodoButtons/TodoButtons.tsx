// @flow
import * as React from 'react';
import {FC} from 'react';
import Button from "../../UI/Button/Button";

interface TodoButtonsProps {
    modification: boolean
    onSave: () => void
    onDelete: () => void
    startModification: () => void,
    endModification: () => void,
}

const TodoButtons: FC<TodoButtonsProps> = (props) => {
    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full justify-center">
            <Button type={'button'}
                    onClick={() => props.modification ? props.onSave() : props.startModification()}
                    className={'w-full'}
                    variant={'default'}>
                {props.modification ? "Сохранить" : "Изменить"}
            </Button>
            <Button type={'button'}
                    className={'w-full'}
                    onClick={() => props.modification ? props.endModification() : props.onDelete()}
                    variant={'reset'}>
                {props.modification ? "Отмена" : "Удалить"}
            </Button>
        </div>
    );
};

export default TodoButtons;
