export interface CustomButtonProps {
    id?: string;
    hasLeftIcon?: boolean | ButtonLeftIcon_Props;
    textContent: string;
    textColor?: ButtonText_Props;
    buttonColor?: ButtonColor_Props;
    onClick: () => {} | void | Function;
}

export interface ButtonColor_Props {
    buttonColor?: string;
}

export interface ButtonText_Props {
    textColor?: string;
}

export interface ButtonLeftIcon_Props {
    hasLeftIcon?: boolean;
    sizeIcon?: string;
}