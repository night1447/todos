import {FC} from "react";
import {v4} from "uuid";
import {CHOICES} from "../../constants/constants";

interface ChoicesProps {
    onClick: (choice: string) => void,
    choice: string
    className?: string
}

const Choices: FC<ChoicesProps> = ({onClick, choice, className}) => {
    return (
        <ul className={`flex gap-6 flex-wrap justify-center md:gap-10  ${className || ''}`}>
            {CHOICES.map(item =>
                <li className={`${choice === item ? 'text-accent font-bold' : ''} text-2xl  transition-colors hover:text-accent`}
                    key={v4()}
                    onClick={() => onClick(item)}>{item}</li>)}
        </ul>
    );
};
export default Choices;
