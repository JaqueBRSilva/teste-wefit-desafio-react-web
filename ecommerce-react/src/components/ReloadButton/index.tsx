import styled from "styled-components";
import { ButtonColor_Props, ButtonText_Props, CustomButtonProps } from "../../types/CustomButton";

const ReloadButtonMain = styled.button<ButtonColor_Props>`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem 2.2rem;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: ${({ buttonColor }) => buttonColor != null ? buttonColor : '#009edd'};

    @media screen and (min-width: 992px) {
        padding: 0 3rem;
        margin-top: 1.3rem;
    }
`

const ReloadButtonText = styled.p<ButtonText_Props>`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    color: ${({ textColor }) => textColor != null ? textColor : "#FFF"};
`

function ReloadButton({ ...props }: CustomButtonProps) {

    return (
        <ReloadButtonMain onClick={() => props.onClick()}>
            <ReloadButtonText>
                {props.textContent}
            </ReloadButtonText>
        </ReloadButtonMain>
    )
}

export default ReloadButton