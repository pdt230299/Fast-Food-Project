import React, { useEffect, useState } from 'react';

import orderApi from '../../../api/orderApi';
import Order from './Order';

function Body() {
    const [ordersList, setOrdersList] = useState([]);
    console.log(ordersList);
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await orderApi.getAll();
                setOrdersList(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductList();
    }, []);
    return (
        <div className="flex flex-col flex-grow font-poppins min-h-screen">
            <div className="flex items-center flex-shrink-0 sm:h-16 h-12 px-8 border-b border-gray-300">
                <h1 className=" uppercase sm:text-xl text-base font-medium">Orders</h1>
            </div>
            <div className="flex-grow p-6 overflow-auto bg-gray-200">
                {ordersList.map((order, index) => <Order order={order} key={index} />)}
            </div>
        </div>
    );
}

export default Body;