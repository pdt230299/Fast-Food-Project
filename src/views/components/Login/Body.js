import React, { useState, useContext, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';

import { AuthenticateContext } from '../AuthenticateContext';

function Body() {
    let history = useHistory();

    const [name, setName] = useState();
    let [isOpen, setIsOpen] = useState(false);

    const [password, setPassword] = useState();
    const { useStateAuthenticated } = useContext(AuthenticateContext);
    const [isAuthenticated, setIsAuthenticated] = useStateAuthenticated;
    function handleRedirect() {
        const nameCheck = `${name}`;
        const passwordCheck = `${password}`;
        if (nameCheck == 'admin' && passwordCheck == 'xinchao123') {
            history.push('/dashBroad');
            setIsAuthenticated(true);
        } else {
            setIsOpen(true);
        }
    }
    console.log(isAuthenticated);
    function handleChangeInputName(e) {
        setName(e.target.value);
    }

    function handleChangeInputPass(e) {
        setPassword(e.target.value);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='h-screen bg-yellow-100 flex justify-center items-center font-poppins'>
            <div className='relative w-full shadow-2xl max-w-xs m-auto bg-white  rounded p-5 '>
                <header className='text-6xl text-center'>🍔</header>
                <div>
                    <p className='block mb-2 text-gray-500'>Username</p>
                    <input
                        className='w-full p-2 mb-6 text-gray-700 border-b-2 border-gray-500 outline-none focus:bg-gray-100 transition duration-500 ease-in-out '
                        type='text'
                        name='username'
                        onChange={handleChangeInputName}
                    />
                </div>
                <div>
                    <p className='block mb-2 text-gray-500'>Password</p>
                    <input
                        className='w-full p-2 mb-6 text-gray-700 border-b-2 border-gray-500 outline-none focus:bg-gray-100 transition duration-500 ease-in-out'
                        type='password'
                        name='password'
                        onChange={handleChangeInputPass}
                    />
                </div>
                <div className=' text-center'>
                    <button onClick={handleRedirect} className='p-2 border-2 text-gray-400  border-gray-400 rounded-3xl hover:shadow-2xl hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out' type='submit'>
                        <LoginIcon className='w-6 ' />
                    </button>
                </div>
                <Link to='/' className='hover:opacity-60 text-gray-800 font-medium transition duration-500 ease-in-out'>
                    <p className=' absolute right-2 bottom-2'>Home Page</p>
                </Link>
                <Link to='/dashBroad' className='hover:opacity-60 text-gray-800 font-medium transition duration-500 ease-in-out'>
                    <p className=' absolute left-2 bottom-2'>
                        Page
                    </p>
                </Link>
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
                                        className="text-lg font-medium leading-6 text-red-500"
                                    >
                                        🛑 Login failed 🛑
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-red-500">
                                            Your username or password is incorrect !
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
