import { useState } from 'react';
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart,
            getQuantity,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;