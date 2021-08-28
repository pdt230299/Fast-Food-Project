import React from 'react';
import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon, CurrencyDollarIcon } from '@heroicons/react/outline';

function Order({ order }) {
    const timestamp = order.createdAt * 1000;
    const date = new Date(timestamp);
    const dateShow = `Date: ${date.getDate()}/ 
                            ${(date.getMonth() + 1)}/ 
                            ${date.getFullYear()} - 
                            ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    return (
        <div className=" sm:flex-row flex-col  mt-4 flex sm:items-center justify-between p-8 bg-white shadow-md hover:shadow-lg rounded-2xl font-sans">
            <div className="flex flex-col">
                <div className=" ml-4 mb-2 font-medium leading-none">
                    {dateShow}
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                    {order.cart.map((element) => (
                        <div>
                            <div className='mb-2'>
                                <img src={element.imgUrl} className='w-16 h-16' />
                                <div className="flex flex-col ml-3">
                                    <div className=" font-medium leading-none">
                                        {element.name}
                                    </div>
                                    <p className="text-sm text-gray-600 leading-none mt-2">
                                        <span className="font-medium leading-none mr-1">
                                            Description :
                                        </span>
                                        {' '}
                                        {element.description}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-none mt-2">
                                        <span className="font-medium leading-none mr-2">
                                            Price :
                                        </span>
                                        {element.price}
                                        {' '}
                                        $
                                    </p>
                                    <p className="text-sm text-gray-600 leading-none mt-2">
                                        <span className="font-medium leading-none mr-2">
                                            Quantity :
                                        </span>
                                        {element.quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="pb-6 mt-6" />
                <div className=" ml-4 font-medium leading-none">
                    Total :
                    {' '}
                    {order.totalMoney}
                    {' '}
                    <CurrencyDollarIcon className='w-5 inline-block' />
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
Order.defaultProps = {
    order: []
};

Order.propTypes = {
    order: PropTypes.array
};
export default Order;