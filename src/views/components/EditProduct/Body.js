/* eslint-disable max-lines */
import React, { useState, Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BadgeCheckIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

import productApi from '../../../api/productApi';

function Body() {
    const { slug } = useParams();
    const [product, setProduct] = useState({});

    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const responseProduct = await productApi.get(slug);
                setProduct(responseProduct);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductList();
    }, [slug]);

    function handleImageShow(e) {
        const valueImg = e.target.value;
        setProduct({
            ...product,
            imgUrl: valueImg
        });
    }
    function handleName(e) {
        const valueName = e.target.value;
        setProduct({
            ...product,
            name: valueName
        });
    }
    function handlePrice(e) {
        const valuePrice = parseInt(e.target.value, 10);
        setProduct({
            ...product,
            price: valuePrice
        });
    }
    function handleType(e) {
        const valueType = e.target.value;
        setProduct({
            ...product,
            type: valueType
        });
    }
    function handleDescription(e) {
        const valueDescription = e.target.value;
        setProduct({
            ...product,
            description: valueDescription
        });
    }
    function handlePostProduct() {
        const postProduct = async () => {
            try {
                await productApi.put(product);
            } catch (error) {
                console.log(error);
            }
        };
        postProduct();
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="flex flex-col flex-grow font-poppins min-h-screen">
            <div className="flex items-center flex-shrink-0 sm:h-16 h-12 px-8 border-b border-gray-300">
                <h1 className=" uppercase sm:text-xl text-base font-medium">Edit product</h1>
            </div>
            <div className="flex-grow p-6 overflow-auto bg-gray-200">
                <div className='form'>
                    <div className='mb-4 flex items-center gap-4'>
                        <p className='text-lg font-semibold text-gray-600 '>
                            Image Product
                        </p>
                        <img
                            className='w-32 h-32 mr-4 object-cover border-2 border-gray-400 rounded-full'
                            src={product.imgUrl || 'https://static.cdn.packhelp.com/wp-content/uploads/2019/06/06153013/plain-shipping-boxes-packhelp-kva.jpg'}
                        />
                    </div>
                    <div className='md:flex flex-row md:space-x-4 w-full text-xs'>
                        <div className='mb-3 space-y-2 w-full text-xs'>
                            <p className='font-semibold text-gray-600 py-2'>
                                Name Product
                                {' '}
                            </p>
                            <input
                                className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4'
                                type='text'
                                onChange={handleName}
                                value={product.name || ''}
                            />
                        </div>
                    </div>
                    <div className='mb-3 space-y-2 w-full text-xs'>
                        <p className=' font-semibold text-gray-600 py-2'>
                            Image Product URL
                        </p>
                        <div className='flex flex-wrap items-stretch w-full mb-4 relative'>
                            <div className='flex'>
                                <span className='flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                </span>
                            </div>
                            <input
                                type='text'
                                className='flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow'
                                placeholder='https://'
                                onChange={handleImageShow}
                                value={product.imgUrl || ''}
                            />
                        </div>
                    </div>
                    <div className='md:flex md:flex-row md:space-x-4 w-full text-xs'>
                        <div className='w-full flex flex-col mb-3'>
                            <p className='font-semibold text-gray-600 py-2'>
                                Price Product
                            </p>
                            <input
                                onChange={handlePrice}
                                className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4'
                                type='text'
                                placeholder='$'
                                value={product.price || ''}
                            />
                        </div>
                        <div className='w-full flex flex-col mb-3'>
                            <p className='font-semibold text-gray-600 py-2'>
                                Select Type Product
                            </p>
                            <select value={product.type || ''} onChange={handleType} className='block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full '>
                                <option value='Burger'>Burger</option>
                                <option value='Drink'>Drink</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex-auto w-full mb-1 text-xs space-y-2'>
                        <p className='font-semibold text-gray-600 py-2'>
                            Description Product
                        </p>
                        <textarea
                            value={product.description || ''}
                            onChange={handleDescription}
                            className='min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4'
                            placeholder='Enter your product info'
                        />
                    </div>
                    <div className='mt-5 text-right md:space-x-3 md:block flex flex-col-reverse'>
                        <Link to='/products'>
                            <button type='button' className='mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100'>
                                {' '}
                                Cancel
                                {' '}
                            </button>
                        </Link>
                        <button onClick={handlePostProduct} type='button' className='mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500'>
                            Save
                        </button>
                    </div>
                </div>
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
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-green-500"
                                    >
                                        Success
                                        <BadgeCheckIcon className=' ml-2 inline-block w-8' />
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-green-500 ">
                                            Edited a successful product !
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
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

export default Body;
