import {FC, PropsWithChildren} from "react";
import Portal from "../Portal/Portal";

interface ModalProps {
    message: string,
    closeModal: () => void,
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({closeModal, message}) => {
    return (
        <Portal wrapperId={'modal'}>
            <div className={'fixed flex justify-center items-center z-20 w-full h-full left-0 top-0'}>
                <div
                    className={'relative flex justify-center items-center w-full h-full text-center px-5 md:h-1/2 md:w-10/12 xl:w-1/2 bg-white rounded'}>
                    <p className={'text-2xl text-red'}>{message}</p>
                    <button className={'absolute right-10 top-10'} type={'button'} onClick={closeModal}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M41.1333 9.13326C41.282 8.9845 41.4 8.80789 41.4805 8.61353C41.561 8.41916 41.6025 8.21084 41.6025 8.00046C41.6025 7.79008 41.561 7.58176 41.4805 7.38739C41.4 7.19303 41.282 7.01642 41.1333 6.86766C40.9845 6.7189 40.8079 6.60089 40.6135 6.52038C40.4192 6.43988 40.2108 6.39844 40.0005 6.39844C39.7901 6.39844 39.5818 6.43988 39.3874 6.52038C39.193 6.60089 39.0164 6.7189 38.8677 6.86766L24.0005 21.7381L9.13326 6.86766C8.9845 6.7189 8.80789 6.60089 8.61353 6.52038C8.41916 6.43988 8.21084 6.39844 8.00046 6.39844C7.79008 6.39844 7.58176 6.43988 7.38739 6.52038C7.19303 6.60089 7.01642 6.7189 6.86766 6.86766C6.7189 7.01642 6.60089 7.19303 6.52038 7.38739C6.43988 7.58176 6.39844 7.79008 6.39844 8.00046C6.39844 8.21084 6.43988 8.41916 6.52038 8.61353C6.60089 8.80789 6.7189 8.9845 6.86766 9.13326L21.7381 24.0005L6.86766 38.8677C6.56722 39.1681 6.39844 39.5756 6.39844 40.0005C6.39844 40.4253 6.56722 40.8328 6.86766 41.1333C7.1681 41.4337 7.57558 41.6025 8.00046 41.6025C8.42534 41.6025 8.83282 41.4337 9.13326 41.1333L24.0005 26.2629L38.8677 41.1333C39.1681 41.4337 39.5756 41.6025 40.0005 41.6025C40.4253 41.6025 40.8328 41.4337 41.1333 41.1333C41.4337 40.8328 41.6025 40.4253 41.6025 40.0005C41.6025 39.5756 41.4337 39.1681 41.1333 38.8677L26.2629 24.0005L41.1333 9.13326Z"
                                  fill="#2F2F2F"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'fixed bg-black opacity-30 w-full h-full left-0 top-0 z-10'}>
            </div>
        </Portal>
    );
};
export default Modal;
