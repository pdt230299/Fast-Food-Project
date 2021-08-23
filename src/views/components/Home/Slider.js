import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <Slider {...settings}>
            <div>
                <img className='w-full' src='https://mcdonalds.vn/uploads/2018/banner-slider/mgtd_homeslide.jpg' />
            </div>
            <div>
                <img className='w-full' src='https://mcdonalds.vn/uploads/2018/banner-slider/TOW_homeslide.jpg' />
            </div>
            <div>
                <img className='w-full' src='https://mcdonalds.vn/uploads/2018/banner-slider/slider.jpg' />
            </div>
        </Slider>
    );
}
