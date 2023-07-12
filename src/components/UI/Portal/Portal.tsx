import {createPortal} from "react-dom";
import {FC, PropsWithChildren} from "react";

interface PortalProps {
    wrapperId: string
}

const Portal: FC<PropsWithChildren<PortalProps>> = ({wrapperId, children}) => {
    return createPortal(children, document.getElementById(wrapperId) as HTMLElement);
};
export default Portal;
