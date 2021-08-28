import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from './CartContext';

function HeaderComponent() {
    const { useStateCart } = useContext(CartContext);
    const [cart] = useStateCart;
    return (
        <header className='bg-white font-poppins flex items-center justify-items-center'>
            <nav className='py-8 px-14 w-full'>
                <div className='w-full flex items-center gap-4 xl:flex-row flex-col'>
                    <h1 className='text-3xl font-bold text-gray-700 '>
                        🍕McDonalds🍔
                    </h1>
                    <div className='xl:ml-4'>
                        <ul className='md:flex grid grid-cols-2 gap-4 text-xl'>
                            <li className='md:ml-8'>
                                <Link to='/' className='  hover:text-yellow-300 text-gray-800 font-semibold'>
                                    Home
                                </Link>
                            </li>
                            <li className='md:ml-8'>
                                <Link to='/research' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                    Research
                                </Link>
                            </li>
                            <li className='md:ml-8'>
                                <Link to='/menu' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                    Menu
                                </Link>
                            </li>
                            <li className='md:ml-8'>
                                <Link to='/promotion' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                    Promotion
                                </Link>
                            </li>
                            <li className='md:ml-8'>
                                <Link to='/news' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                    News
                                </Link>
                            </li>
                            <li className='md:ml-8'>
                                <Link to='/contact' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='md:ml-8'>
                        <Link to='/cart' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                            <div className='relative flex text-xl'>
                                Cart
                                <svg className="ml-4 flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                </svg>
                                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                    {cart.length}
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to='/login' className='font-semibold'>
                            <div className='border-2 p-1 xl:ml-8 bg-gray-900 border-gray-900 hover:bg-white text-white hover:text-gray-900'>
                                Product Management
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent;
