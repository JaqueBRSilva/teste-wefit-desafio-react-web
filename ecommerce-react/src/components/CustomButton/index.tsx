import styled from "styled-components";
import ADD_CARD_ICON from '../../assets/shopping-cart-add.svg';
import { ButtonColor_Props, ButtonLeftIcon_Props, ButtonText_Props, CustomButtonProps } from "../../types/CustomButton";

const ButtonMain = styled.button<ButtonColor_Props>`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: ${({ buttonColor }) => buttonColor != null ? buttonColor : '#009edd'};

    @media screen and (min-width: 992px) {    }
`

const ButtonLeftCartContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`

const ButtonLeftCartIcon = styled.img<ButtonLeftIcon_Props>`
    width: 0.9rem;
`

const ButtonLeftNumber = styled.p`
    font-size: 0.7rem;
    color: var(--white);
`

const ButtonText = styled.p<ButtonText_Props>`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    color: ${({ textColor }) => textColor != null ? textColor : "#FFF"};
`

function CustomButton({ ...props }: CustomButtonProps) {

    return (
        <ButtonMain onClick={() => props.onClick()}>

            {(props.hasLeftIcon != false || null) &&
                <ButtonLeftCartContainer>
                    <ButtonLeftCartIcon
                        src={ADD_CARD_ICON}
                        alt="adicionar produto no carrinho"
                    />
                    <ButtonLeftNumber>0</ButtonLeftNumber>
                </ButtonLeftCartContainer>
            }

            <ButtonText>
                {props.textContent}
            </ButtonText>
        </ButtonMain>
    )
}

export default CustomButton