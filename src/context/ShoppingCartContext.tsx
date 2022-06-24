import { useContext } from "react";
import { createContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

const shoppingCartContext= createContext({})

export function useShoppingCart() {
return useContext(ShoppingCartContext)

}

export function ShoppingCartProvider( {children }) {
    return <shoppingCartContext.Provider value = {{}}>
        {children}
    </shoppingCartContext.Provider>
}