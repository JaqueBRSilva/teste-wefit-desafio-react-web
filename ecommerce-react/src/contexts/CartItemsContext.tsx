import { createContext, useState } from 'react'
import { CartItemsProps, CartProvider_Props, ICartContext } from '../types/CartItems'

export const CartItemsContext = createContext<ICartContext>({} as ICartContext)

function CartProvider({ children }: CartProvider_Props) {
    const [itemsList, setItemsList] = useState<CartItemsProps[]>([])
    const [totalItemsNumber, setTotalItemsNumber] = useState(0)

    const addMovieToCart = (movieSelected: CartItemsProps[]) => {
        setItemsList(movieSelected)
    }

   const increaseQuantityItem = () => {
        setTotalItemsNumber(totalItemsNumber + 1)
    }

    const decreaseQuantityItem = () => {
        setTotalItemsNumber(totalItemsNumber - 1)

        if(totalItemsNumber < 1) {
            setTotalItemsNumber(0)
        }
    }

    const removeItemFromCart = () => {
    }

    return (
        <CartItemsContext.Provider value={{ 
            itemsList,
            totalItemsNumber,
            addMovieToCart,
            increaseQuantityItem,
            decreaseQuantityItem,
            removeItemFromCart
         }} >
            {children}
        </CartItemsContext.Provider>
    )
}

export default CartProvider