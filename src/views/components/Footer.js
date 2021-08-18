import React from 'react';

const Footer = () => (
    <div>
        <div className='bg-gray-100 pt-5 font-poppins'>
            <div className='max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto'>
                <div className='p-5'>
                    <h3 className='font-bold text-xl text-indigo-600'>
                        McDonalds
                    </h3>
                </div>
                <div className='p-5'>
                    <div className='text-sm uppercase text-indigo-600 font-bold'>
                        Resources
                    </div>
                    <a className='my-3 block hover:opacity-60' href='/#'>
                        History McDonalds
                    </a>
                    <a className='my-3 block hover:opacity-60' href='/#'>
                        Introduce
                    </a>
                    <a className='my-3 block hover:opacity-60' href='/#'>
                        Food safety
                    </a>
                </div>
                <div className='p-5'>
                    <div className='text-sm uppercase text-indigo-600 font-bold'>
                        Support
                    </div>
                    <a className='my-3 block hover:opacity-60' href='/#'>
                        Help Center
                    </a>
                    <a className='my-3 block hover:opacity-60' href='/#'>
                        Privacy Policy
                    </a>
                    <a className='my-3 block hover:opacity-60' href='/#'>
                        Conditions
                    </a>
                </div>
                <div className='p-5'>
                    <div className='text-sm uppercase text-indigo-600 font-bold'>
                        Contact us
                    </div>
                    <p className='my-3 block '>
                        024 3312 0103
                    </p>
                    <a className='my-3 block hover:opacity-60' href='https://www.google.com/maps/place/VMO+Holdings/@21.0288853,105.7800431,15z/data=!4m5!3m4!1s0x0:0xe0059369a89d3969!8m2!3d21.0288756!4d105.7800415'>
                        IDMC, Tầng 8, tòa, Tôn Thất Thuyết, Cầu Giấy, Hà Nội
                    </a>
                    <a className='my-3 block hover:opacity-60' href="mailto:info@vmogroup.com">
                        info@vmogroup.com
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
