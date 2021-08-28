import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();
// eslint-disable-next-line
function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let cartFromLocal = JSON.parse(localStorage.getItem('cart'));
        if (cartFromLocal == null) {
            cartFromLocal = [];
        }
        if (cartFromLocal.length !== 0) {
            setCart(cartFromLocal);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ useStateCart: [cart, setCart] }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;