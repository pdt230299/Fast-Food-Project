import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
    <header className='bg-white font-poppins '>
        <nav className='py-8 px-14'>
            <div className='flex items-center lg:flex-row flex-col'>
                <h1 className='text-3xl p-8  font-bold text-gray-700 '>
                    McDonalds
                </h1>
                <div className='ml-4'>
                    <ul className='sm:flex space-x-8 text-xl'>
                        <li>
                            🍟🍕🍔🌭🥓🍳
                        </li>
                        <li>
                            <Link to='/' className='  hover:text-yellow-300 text-gray-800 font-semibold'>
                                Home page
                            </Link>
                        </li>
                        <li>
                            <Link to='/research' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to='/menu' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to='/promotion' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                Promotion
                            </Link>
                        </li>
                        <li>
                            <Link to='/news' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className=' hover:text-yellow-300 text-gray-800 font-semibold'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default HeaderComponent;
