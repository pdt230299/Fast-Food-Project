import React, { useEffect, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { Link, useRouteMatch } from 'react-router-dom';

import productApi from '../../../api/productApi';
import Product from './Product';

function Body() {
    const [productList, setProductList] = useState([]);
    const { url } = useRouteMatch();

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productApi.getAll();
                setProductList(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductList();
    }, []);

    function setProductAfter(listPro) {
        setProductList(listPro);
    }

    return (
        <div className="flex flex-col flex-grow font-poppins min-h-screen">
            <div className="flex items-center flex-shrink-0 sm:h-16 h-12 px-8 border-b border-gray-300">
                <h1 className=" uppercase sm:text-xl text-base font-medium">Products</h1>
            </div>
            <div className="flex-grow p-6 overflow-auto bg-gray-200">
                <Link to={`${url}/add`}>
                    <PlusCircleIcon className='ml-4 inline-block transition duration-500 ease-in-out cursor-pointer hover:text-gray-600 w-12 text-gray-400 bg-white rounded-full shadow-xl' />
                </Link>
                {productList.map((product, index) => <Product setProductAfter={setProductAfter} list={productList} product={product} key={index} />)}
            </div>
        </div>
    );
}

export default Body;