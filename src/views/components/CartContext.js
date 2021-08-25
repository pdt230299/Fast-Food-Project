import React, { useState } from 'react';

export const CartContext = React.createContext();
// eslint-disable-next-line
function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ useStateCart: [cart, setCart] }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;