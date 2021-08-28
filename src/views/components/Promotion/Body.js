import React from 'react';

const Body = () => (
    <div className='flex flex-col items-center gap-y-8 my-8 mx-auto max-w-6xl '>
        <h1 className=' rounded-b-lg inline-block p-4 w-max text-3xl font-poppins uppercase bg-yellow-300'>
            Promotions for you 😘
        </h1>
        <div className='grid gap-y-4 p-4'>
            <img src='https://mcdonalds.vn/uploads/2018/promotions/TOW_whatsonD.jpg' />
            <img src='https://mcdonalds.vn/uploads/2018/promotions/nuichao_whatsonD.jpg' />
            <img src='https://mcdonalds.vn/uploads/2018/promotions/newGMAL_whatson_desktop.jpg' />
        </div>
    </div>
);

export default Body;
