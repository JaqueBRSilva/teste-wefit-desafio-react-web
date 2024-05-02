import { useContext } from "react"
import { CartItemsContext } from "../../contexts/CartItemsContext"
import { Text } from "./styles"


function CountDownProductsInfo() {
    const { totalItemsNumber } = useContext(CartItemsContext)

    return (
        <>
            <Text>
                {totalItemsNumber} itens
            </Text>
        </>
    )
}

export default CountDownProductsInfo