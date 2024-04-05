import { useContext, useState } from "react";
import styled from "styled-components";
import ADD_CARD_ICON from '../../assets/shopping-cart-add.svg';
import { CartItemsContext } from "../../contexts/CartItemsContext";
import { AddToCartButtonProps } from "../../types/AddToCartButton";

const ButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    transition-delay: 0.5ms; 

    &:hover {
        transition-duration: 0.6s;
    }
`

const ButtonMainActive = styled.button`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.7rem;
    border-radius: 4px;
    border-color: transparent;
    align-items: center;
    justify-content: center;
    background-color: var(--green);
    transition-delay: 0.5ms; 

    &:hover {
        transition-duration: 0.6s;
    }
`

const ButtonLeftCartContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`

const ButtonLeftCartIcon = styled.img`
    width: 0.9rem;
`

const ButtonLeftNumber = styled.p`
    font-size: 0.7rem;
    color: var(--white);
`

const ButtonText = styled.p`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
`

function AddToCartButton({ ...props }: AddToCartButtonProps) {
    const [addMovie, setAddMovie] = useState(false)
    const { totalItemsNumber } = useContext(CartItemsContext)

    return (
        <>
            {
                (!addMovie) ? (

                    <ButtonMain id={props.id}
                        onClick={() => {
                            setAddMovie(true)
                            props.onMovieClicked()
                        }}
                    >
                        <ButtonLeftCartContainer>
                            <ButtonLeftCartIcon
                                src={ADD_CARD_ICON}
                                alt="adicionar filme no carrinho"
                            />
                            <ButtonLeftNumber>0</ButtonLeftNumber>
                        </ButtonLeftCartContainer>

                        <ButtonText>
                            {props.textContent}
                        </ButtonText>
                    </ButtonMain>

                ) : (

                    <ButtonMainActive id={props.id}
                        onClick={() => props.onMovieClicked()}
                    >
                        <ButtonLeftCartContainer>
                            <ButtonLeftCartIcon
                                src={ADD_CARD_ICON}
                                alt="adicionar filme no carrinho"
                            />
                            <ButtonLeftNumber>{totalItemsNumber}</ButtonLeftNumber>
                        </ButtonLeftCartContainer>

                        <ButtonText>
                            {props.textContent}
                        </ButtonText>
                    </ButtonMainActive>

                )}
        </>
    )
}

export default AddToCartButton