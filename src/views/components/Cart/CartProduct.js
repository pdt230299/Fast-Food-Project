import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../CartContext';

function CartProduct({ product }) {
    const { useStateCart } = useContext(CartContext);
    const [cart, setCart] = useStateCart;
    const shallowCart = [...cart];
    function onChangeInput(e) {
        let inputValue = e.target.value;
        if (inputValue == '') {
            alert('Please do not leave the quantity box blank');
            inputValue = '1';
        }
        if (inputValue > 100) {
            alert('Please fill smaller 100');
            inputValue = '1';
        }
        const newProduct = {
            ...product,
            quantity: parseInt(inputValue, 10)
        };
        const index = shallowCart.findIndex(ele => ele.id == newProduct.id);
        shallowCart[index] = newProduct;
        setCart(shallowCart);
    }

    function onChangeDelete() {
        const index = shallowCart.findIndex(ele => ele.id == product.id);
        shallowCart.splice(index, 1);
        setCart(shallowCart);
    }
    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <img src={product.imgUrl} className="w-20 rounded" alt="Thumbnail" />
            </td>
            <td>
                <img src={product.imgUrl} className="w-20 rounded md:hidden" alt="Thumbnail" />
                <p className=" font-medium mb-2 md:ml-4">{product.name}</p>
                <button onClick={onChangeDelete} type="submit" className=" hover:text-red-400 text-gray-700 md:ml-4">
                    Remove
                </button>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">
                        <input onChange={onChangeInput} type="number" min='1' max='100' value={product.quantity} className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                    </div>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    {product.price}
                    $
                </span>
            </td>
            <td className="text-right">
                <span className="text-sm lg:text-base font-medium">
                    {product.price * product.quantity}
                    $
                </span>
            </td>
        </tr>
    );
}
CartProduct.defaultProps = {
    product: {}
};

CartProduct.propTypes = {
    product: PropTypes.object
};
export default CartProduct;