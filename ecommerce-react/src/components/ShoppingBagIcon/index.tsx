import BAG_ICON from '../../assets/bag.svg'
import CountDownProductsInfo from "../CountDownProductsInfo"
import { GroupContainer, Icon, IconContainer, ItemName, ProductsContainer } from "./styles"


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