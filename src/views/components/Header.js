import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='bg-white '>
        <nav className='flex sm:flex-row flex-col items-center py-8 px-14 justify-between'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-gray-700 '>
                    McDonalds
                </h1>
                <div className='ml-4'>
                    <ul className='sm:flex space-x-8'>
                        <li>
                            🍟🍕🍔🌭🥓🍳
                        </li>
                        <li>
                            <Link to='/' className='hover:opacity-60 text-gray-800 font-semibold'>
                                Home page
                            </Link>
                        </li>
                        <li>
                            <Link to='/research' className='hover:opacity-60 text-gray-800 font-semibold'>
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to='/menu' className='hover:opacity-60 text-gray-800 font-semibold'>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to='/promotion' className='hover:opacity-60 text-gray-800 font-semibold'>
                                Promotion
                            </Link>
                        </li>
                        <li>
                            <Link to='/news' className='hover:opacity-60 text-gray-800 font-semibold'>
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='hover:opacity-60 text-gray-800 font-semibold'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
