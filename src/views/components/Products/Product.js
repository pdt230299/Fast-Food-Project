import React from 'react';
import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline';

function Product({ product }) {
    return (
        <div className=" sm:flex-row flex-col  mt-4 flex sm:items-center justify-between p-8 bg-white shadow-md hover:shadow-lg rounded-2xl font-sans">
            <div className="flex items-center">
                <img src={product.imgUrl} className='w-16 h-16' />
                <div className="flex flex-col ml-3">
                    <div className=" font-medium leading-none">
                        {product.name}
                    </div>
                    <p className="text-sm text-gray-600 leading-none mt-2">
                        <span className="font-medium leading-none mr-1">
                            Description :
                        </span>
                        {' '}
                        {product.description}
                    </p>
                    <p className="text-sm text-gray-600 leading-none mt-2">
                        <span className="font-medium leading-none mr-2">
                            Price :
                        </span>
                        {product.price}
                        {' '}
                        $
                    </p>
                </div>
            </div>
            <div className='flex mt-4 sm:mt-0'>
                <button type='button' className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full">
                    <PencilAltIcon className='w-4' />
                </button>
                <button type='button' className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                    <TrashIcon className='w-4' />
                </button>
            </div>
        </div>
    );
}
Product.defaultProps = {
    product: []
};

Product.propTypes = {
    product: PropTypes.array
};
export default Product;