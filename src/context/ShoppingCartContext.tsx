import { useContext, ReactNode, useState } from "react";
import { createContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity:number
}
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreasedCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void

}

const shoppingCartContext= createContext({} as ShoppingCartContext)

export function useShoppingCart() {
return useContext(ShoppingCartContext)

}

export function ShoppingCartProvider( {children }:ShoppingCartProviderProps) {
    const[cartItems, setCartItems] = useState<CartItemArray>([])
    
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    
    function increaseCartQuantity ( id:number) {
        setCartItems(currItems => {
            if ( currItems.find(item => item.id ===id )== null){
                return[...currItems, {id,quantity:1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id ) {
                        return { ...item,quantity: item.quantity + 1}
                    }else {
                            return item
                        }
                }
        })
            }
        
    return (<shoppingCartContext.Provider value = {{}}>
        {children}
    </shoppingCartContext.Provider>
    )
}