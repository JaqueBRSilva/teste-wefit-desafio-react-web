import styled from "styled-components"
import BAG_ICON from '../../assets/bag.svg'
import CountDownProductsInfo from "../CountDownProductsInfo"

const ProductsContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
`

const GroupContainer = styled.div`
    @media screen and (min-width: 992px){
        display: grid;
        justify-items: flex-end;
        margin-right: -3em;
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

const Icon = styled.img`
    height: 1.8rem;
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

            <Icon
                src={BAG_ICON}
                alt="sacola de compras"
            />
        </ProductsContainer>
    )
}

export default ShoppingBagIcon