import { DefaultButtonProps } from "../../types/DefaultButton";
import { DefaultButtonMain, DefaultButtonText } from "./styles";

function DefaultButton({ ...props }: DefaultButtonProps) {

    return (
        <DefaultButtonMain onClick={() => props.onClick()}>
            <DefaultButtonText>
                {props.textContent}
            </DefaultButtonText>
        </DefaultButtonMain>
    )
}

export default DefaultButton