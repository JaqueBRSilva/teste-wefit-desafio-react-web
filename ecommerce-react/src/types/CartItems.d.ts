import { MoviesProps } from "./Movies";

export interface CartItemsProps {
    id?: string | number | any;
    dataMovie: MoviesProps;
    unitQuantity: number;
    totalPrice?: number;
}

export interface ICartContext {
    itemsList: CartItemsProps[];
    totalItemsNumber: number;
    addMovieToCart: (itemsList) => void;
    increaseQuantityItem: () => void;
    decreaseQuantityItem: () => void;
    removeItemFromCart: (id: string) => void;
}

export type CartProvider_Props = {
    children: React.ReactNode
}