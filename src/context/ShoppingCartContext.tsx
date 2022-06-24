import { useContext, ReactNode } from "react";
import { createContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreasedCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void

}

const shoppingCartContext= createContext({})

export function useShoppingCart() {
return useContext(ShoppingCartContext)

}

export function ShoppingCartProvider( {children }:ShoppingCartProviderProps) {
    const[cartItems, setCartItems] = useState<CartItemArray>([])
    return (<shoppingCartContext.Provider value = {{}}>
        {children}
    </shoppingCartContext.Provider>
    )
}