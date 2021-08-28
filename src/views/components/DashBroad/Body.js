import React from 'react';

function Body() {
    return (
        <div className='flex flex-grow font-poppins'>
            <div className=" w-full text-gray-700">
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                        <h1 className="text-xl font-medium">Introduce</h1>
                        <button type='button' className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
                            Action 1
                        </button>
                        <button type='button' className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
                            Action 2
                        </button>
                    </div>
                    <div className="flex-grow p-6 overflow-auto bg-gray-200">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-2 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-2 bg-white border border-gray-300" />
                            <div className="h-24 col-span-3 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-2 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-2 bg-white border border-gray-300" />
                            <div className="h-24 col-span-3 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-2 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-1 bg-white border border-gray-300" />
                            <div className="h-24 col-span-2 bg-white border border-gray-300" />
                            <div className="h-24 col-span-3 bg-white border border-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;