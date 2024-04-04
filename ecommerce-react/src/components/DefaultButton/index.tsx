import styled from "styled-components";
import { DefaultButtonProps } from "../../types/DefaultButton";

const DefaultButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem 2.2rem;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);

    @media screen and (min-width: 992px) {
        padding: 0 3rem;
        margin-top: 1.3rem;
    }
`

const DefaultButtonText = styled.p`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
`

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