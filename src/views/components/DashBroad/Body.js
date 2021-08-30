import React from 'react';

function Body() {
    return (
        <div className=' h-screen flex flex-grow font-poppins'>
            <div className=" w-full text-gray-700">
                <div className=" h-full flex flex-col flex-grow">
                    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                        <h1 className="text-xl font-medium">Introduce</h1>
                    </div>
                    <div className="flex-grow p-6 lg:p-12 overflow-auto bg-gray-200">
                        <div className="grid grid-cols-3 gap-6">
                            <div className='col-span-1 p-4 bg-white rounded-md border  border-gray-300'>
                                <p className=' text-lg font-medium'>You can manage:</p>
                            </div>
                            <div className='col-span-1 p-4 bg-white rounded-md border border-gray-300'>
                                <p>1. The Products 🍔🍿</p>
                                <p>2. The Orders 🎁</p>
                            </div>
                            <div className=" row-span-2 col-span- p-4 bg-white rounded-md border border-gray-300">
                                <p className=' text-lg font-medium mb-4'>Besides:</p>
                                <p>You can also see the orders that customers place through your website, so you can know the number of products that customers order, as well as the total amount of an order.</p>
                            </div>
                            <div className=" col-span-2 p-4 bg-white rounded-md border border-gray-300">
                                <p className=' text-lg font-medium mb-4'>About Page:</p>
                                <p>This is the page to manage the products you want to sell, as well as advertise them.</p>
                                <p>You can add, edit and delete products most easily.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;