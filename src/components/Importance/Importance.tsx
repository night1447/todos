import {FC} from "react";
import Flag from "../UI/Flag/Flag";
import styles from './importance.module.scss'

const Importance: FC = () => {
    return (
        <label htmlFor={"importance"}
               className={"relative flex flex-row text-transparent items-center justify-center mb-5 cursor-pointer"}>
            <input type="checkbox" id={"importance"}
                   name={"importance"}
                   className={"absolute top-1/2 left-0 opacity-0 " + styles.input}/>
            <Flag active={false}/>
            <span className={"mr-4 text-xl md:text-2xl text-black"}>Добавить в "Важные"</span>
        </label>
    );
};
export default Importance;
