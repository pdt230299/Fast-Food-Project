import React from 'react';
import PropTypes from 'prop-types';

function CartProduct({ product }) {
    function onChaneInput(e) {
        console.log(e.target.value);
    }
    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <img src={product.imgUrl} className="w-20 rounded" alt="Thumbnail" />
            </td>
            <td>
                <p className=" font-medium mb-2 md:ml-4">{product.name}</p>
                <form>
                    <button type="submit" className="text-gray-700 md:ml-4">
                        <small>(Remove item)</small>
                    </button>
                </form>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">
                        <input onChange={onChaneInput} type="number" min='1' defaultValue={product.quantity} className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
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