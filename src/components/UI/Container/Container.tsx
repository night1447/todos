import {FC, PropsWithChildren} from "react";

const Container: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="container m-auto px-4">
            {children}
        </div>
    );
};
export default Container;
