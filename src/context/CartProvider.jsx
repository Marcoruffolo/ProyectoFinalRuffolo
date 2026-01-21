import { CartContext } from "./cartcontext";

function CartProvider({ children }) {

    const cart = []; 
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}