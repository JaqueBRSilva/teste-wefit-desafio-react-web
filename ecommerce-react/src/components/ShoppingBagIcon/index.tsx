import styled from "styled-components"
import BAG_ICON from '../../assets/bag.svg'
import CountDownProductsInfo from "../CountDownProductsInfo"

const ProductsContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;   

    @media screen and (min-width: 992px){
        gap: 0.4rem;
    }
`

const GroupContainer = styled.div`
    @media screen and (min-width: 992px){
        display: grid;
        justify-items: flex-end;
    }
`

const ItemName = styled.p`
    display: none;

    @media screen and (min-width: 992px){
        display: flex;
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--white);
    }
`

const IconContainer = styled.div`
    @media screen and (min-width: 992px){
        margin: 0;
        margin-left: 1rem;
        justify-self: end;
    }
`

const Icon = styled.img`
    height: 1.8rem;
    display: flex;
`

function ShoppingBagIcon() {

    return (
        <ProductsContainer>
            <GroupContainer>
                <ItemName>
                    Meu Carrinho
                </ItemName>

                <CountDownProductsInfo />
            </GroupContainer>

            <IconContainer>
                <Icon
                    src={BAG_ICON}
                    alt="sacola de compras"
                />
            </IconContainer>
        </ProductsContainer>
    )
}

export default ShoppingBagIcon