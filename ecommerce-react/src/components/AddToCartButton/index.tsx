import { useContext, useState } from "react";
import ADD_CARD_ICON from '../../assets/shopping-cart-add.svg';
import { CartItemsContext } from "../../contexts/CartItemsContext";
import { AddToCartButtonProps } from "../../types/AddToCartButton";
import {
    ButtonLeftCartContainer, ButtonLeftCartIcon, ButtonLeftNumber,
    ButtonMain, ButtonMainActive, ButtonText
} from "./styles";


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