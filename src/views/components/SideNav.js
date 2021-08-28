import React from 'react';
import { FolderIcon, LogoutIcon, ArchiveIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function SideNav() {
    // const { useStateAuthenticated } = useContext(AuthenticateContext);
    // const [isAuthenticated, setIsAuthenticated] = useStateAuthenticated;
    return (
        <div className="flex flex-col items-center font-poppins w-28 sm:w-32 ">
            <Link to='/dashBroad' className='w-full'>
                <div className="text-xs sm:text-base hover:bg-gray-700 w-full sm:h-16 h-12 text-white flex items-center justify-center bg-gray-500 shadow-2xl ">
                    Manager
                </div>
            </Link>
            <Link to='/products'>
                <div className="flex text-xs sm:text-base items-center text-gray-600 flex-col justify-center py-4 mt-8 sm:w-28 w-12 rounded hover:bg-gray-200">
                    <FolderIcon className='sm:w-6 w-3' />
                    Products
                </div>
            </Link>
            <Link to='/orders'>
                <div className="flex text-xs sm:text-base items-center text-gray-600 flex-col justify-center py-4 mt-8 sm:w-28 w-12 rounded hover:bg-gray-200">
                    <ArchiveIcon className='sm:w-6 w-3' />
                    Orders
                </div>
            </Link>
            <Link to='/login'>
                <div className="flex text-xs sm:text-base items-center text-gray-600 flex-col justify-center py-4 mt-8 sm:w-28 w-12 rounded hover:bg-gray-200">
                    <LogoutIcon className='sm:w-6 w-3' />
                    Logout
                </div>
            </Link>
        </div>
    );
}

export default SideNav;