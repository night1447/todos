import {FC, PropsWithChildren} from "react";

interface ButtonProps {
    type: 'submit' | 'reset' | 'button'
    variant: 'default' | 'reset'
    className?: string
    onClick?: () => void
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    if (props.variant === 'reset') {
        return (
            <button type={props.type}
                    onClick={props.onClick}
                    className={'bg-red text-white py-3 w-full  text-lg uppercase transition-colors tracking-wide font-light hover:bg-black-red hover:shadow-lg md:text-xl xl:text-2xl' + props.className}>
                {props.children}
            </button>
        );
    }
    return <button type={props.type}
                   onClick={props.onClick}
                   className={`bg-accent text-white py-3 w-full text-lg uppercase transition-colors tracking-wide font-light hover:bg-light-accent hover:text-accent hover:shadow-lg md:text-xl xl:text-2xl` + props.className}>
        {props.children}
    </button>
};
export default Button;
