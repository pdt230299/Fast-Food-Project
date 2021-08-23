import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => (
    <div className='flex flex-col gap-y-8 my-8 mx-auto max-w-6xl '>
        <div className='relative'>
            <img
                className='rounded-lg'
                src='https://mcdonalds.vn/uploads/2018/home/1170x300-GMALpx.jpg'
            />
            <p className='text-white absolute top-1/3 left-12'>
                Ưu đãi độc quyền & hơn thế nữa
            </p>
            <h1 className='text-2xl font-medium text-white absolute top-2/3 left-12'>
                ỨNG DỤNG McDONALDS
            </h1>
        </div>
        <div className='flex gap-x-4'>
            <div className='relative inline-block'>
                <Link to='/menu' className='hover:opacity-60 text-gray-800 font-semibold'>
                    <img
                        className='rounded-lg'
                        src='https://mcdonalds.vn/uploads/2018/home/mccafe_desktop.jpg'
                    />
                    <p className='font-poppins text-white absolute top-8 right-8 text-3xl font-light'>
                        U want Cafe ?
                    </p>
                </Link>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex justify-between gap-x-4'>
                    <div>
                        <img
                            className='rounded-lg'
                            src='https://mcdonalds.vn/uploads/2018/home/home-stories.jpg'
                        />
                    </div>
                    <div>
                        <img
                            className='rounded-lg'
                            src='https://mcdonalds.vn/uploads/2018/home/hr-pc.jpg'
                        />
                    </div>
                </div>
                <div className='relative'>
                    <Link to='/menu' className='hover:opacity-60 text-gray-800 font-semibold'>
                        <img
                            className='rounded-lg'
                            src='https://mcdonalds.vn/uploads/2018/home/home-banner-hamburger.jpg'
                        />
                        <p className='font-poppins text-white absolute top-12 left-4 text-3xl font-light'>
                            Or Hamberger ?
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Body;
