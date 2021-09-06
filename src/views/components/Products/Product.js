import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TrashIcon, PencilAltIcon, CheckIcon, BackspaceIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

import productApi from '../../../api/productApi';

function Product({ setProductAfter, list, product }) {
    const [isOpen, setIsOpen] = useState(false);
    const shallowList = [...list];
    function closeModal() {
        setIsOpen(false);
    }

    function showDialog() {
        setIsOpen(true);
    }

    function handleDelete() {
        const deleteProduct = async () => {
            try {
                await productApi.delete(product.id);
            } catch (error) {
                console.log(error);
            }
        };
        const index = list.findIndex(ele => ele.id == product.id);
        shallowList.splice(index, 1);
        setIsOpen(false);
        deleteProduct();
        setProductAfter(shallowList);
    }
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
                <Link to={`products/edit/${product.id}`}>
                    <button type='button' className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full">
                        <PencilAltIcon className='w-4' />
                    </button>
                </Link>
                <button onClick={showDialog} type='button' className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                    <TrashIcon className='w-4' />
                </button>
            </div>
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className=' flex justify-center self-center text-lg font-medium leading-6 text-yellow-500'
                                    >
                                        🔥 Do you really want to delete the product ? 🔥
                                    </Dialog.Title>
                                    <div className="mt-4 flex gap-4 justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                            onClick={handleDelete}
                                        >
                                            <CheckIcon className='w-4' />
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            <BackspaceIcon className='w-4' />
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </div>
    );
}
Product.defaultProps = {
    product: {},
    setProductAfter: null,
    list: []
};

Product.propTypes = {
    setProductAfter: PropTypes.func,
    list: PropTypes.array,
    product: PropTypes.object
};
export default Product;