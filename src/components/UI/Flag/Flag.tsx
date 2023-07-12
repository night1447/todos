import {FC} from "react";

type FlagProps = {
    active: boolean
    className?: string
    onClick?: () => void
};
const Flag: FC<FlagProps> = ({active, className,onClick}) => {
    return (
        <svg className={'mr-3 transition-colors ' + className} onClick={onClick} width="32" height="32" viewBox="0 0 48 48" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke={'#FFE12B'} className={'transition-colors'} strokeWidth={2} fill={active ? '#FFE12B' : ''}
                  d="M6.02627 7.29002C5.78135 7.50232 5.58519 7.76503 5.45121 8.06016C5.31724 8.3553 5.24861 8.6759 5.25002 9.00002V40.5C5.25002 41.0968 5.48707 41.6691 5.90903 42.091C6.33099 42.513 6.90328 42.75 7.50002 42.75C8.09676 42.75 8.66906 42.513 9.09101 42.091C9.51297 41.6691 9.75002 41.0968 9.75002 40.5V32.5725C14.0325 29.3625 17.6438 30.8625 23.0025 33.51C26.0456 35.01 29.5163 36.735 33.2775 36.735C36.0375 36.735 38.955 35.8088 41.9738 33.195C42.2168 32.9844 42.4118 32.7241 42.5457 32.4317C42.6796 32.1393 42.7493 31.8216 42.75 31.5V9.00002C42.7501 8.56861 42.6262 8.14627 42.393 7.78332C42.1598 7.42037 41.8272 7.13212 41.4347 6.9529C41.0423 6.77368 40.6066 6.71106 40.1796 6.77249C39.7526 6.83393 39.3523 7.01682 39.0263 7.2994C34.3932 11.3138 30.6769 9.79502 24.9975 6.9844C19.7231 4.36315 13.1569 1.11377 6.02627 7.29002Z"
            />
        </svg>
    );
};
export default Flag;