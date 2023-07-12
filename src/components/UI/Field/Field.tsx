// @flow
import * as React from 'react';
import {FC} from 'react';

type FieldProps = {
    title: string
    htmlFor: string
    name: string
    type: 'textarea' | 'text'
};
const createElementProps = (props: FieldProps) => ({
    'className': `w-full outline-0 text-xl md:text-2xl focus:outline-none active:outline-none ${props.type === 'textarea' && 'resize-none'}`,
    'name': props.name,
    'id': props.htmlFor,
    'required': props.type === 'text',
    minLength: props.type === 'text' ? 2 : 0
})
const Field: FC<FieldProps> = (props) => {
        return <fieldset className={'border-2 rounded-xl px-4 py-2 mb-5 transition-colors w-full'}>
            <legend className={'font-bold'}>{props.title}</legend>
            <label htmlFor={props.htmlFor} className={"w-full"}>
                {props.type === 'text' ? React.createElement('input', createElementProps(props)) : React.createElement('textarea', createElementProps(props))}
            </label>
        </fieldset>
    }
;
export default Field;
