import React from 'react';
import Slider from 'react-slick';

import ImgSlider1 from '../../../assets/images/slider.jpg';
import ImgSlider2 from '../../../assets/images/mgtd_homeslide.jpg';
import ImgSlider3 from '../../../assets/images/TOW_homeslide.jpg';

export default function SimpleSlider() {
    let settings = {
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
                <img className='w-full' src={ImgSlider1} />
            </div>
            <div>
                <img className='w-full' src={ImgSlider2} />
            </div>
            <div>
                <img className='w-full' src={ImgSlider3} />
            </div>

        </Slider>
    );
}
