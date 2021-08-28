import React, { useContext } from 'react';

import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import orderApi from '../../../api/orderApi';

function Body() {
    const { useStateCart } = useContext(CartContext);
    const [cart, setCart] = useStateCart;
    const totalMoney = cart.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity), 0);

    function postOrder() {
        const postProduct = {
            cart,
            totalMoney
        };
        const postCart = async () => {
            try {
                await orderApi.post(postProduct);
            } catch (error) {
                console.log(error);
            }
        };
        postCart();
        setCart([]);
    }
    return (
        <div className="flex justify-center my-6 font-poppins">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                    <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                        <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden md:table-cell" aria-label="idont know" />
                                <th className="text-left">Product</th>
                                <th className="lg:text-right text-left pl-5 lg:pl-0">
                                    <span className="lg:hidden" title="Quantity">Qtd</span>
                                    <span className="hidden lg:inline">Quantity</span>
                                </th>
                                <th className="hidden text-right md:table-cell">Unit price</th>
                                <th className="text-right">Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((element, index) => <CartProduct key={index} product={element} />)}
                        </tbody>
                    </table>
                    <hr className="pb-6 mt-6" />
                    <div className="my-4 mt-6 -mx-2 lg:flex">
                        <div className="lg:px-2 lg:w-1/2">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between pt-4 border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        Total
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        {totalMoney}
                                        $
                                    </div>
                                </div>
                                <button onClick={postOrder} type='button' className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                    <span className="ml-2 mt-5px">BUY</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
