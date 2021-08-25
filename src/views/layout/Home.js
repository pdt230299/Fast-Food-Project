import React from 'react';

import Slider from '../components/Home/Slider';
import Body from '../components/Home/Body';

const HomeLayout = () => (
    <div className='overflow-x-hidden'>
        <Slider />
        <Body />
    </div>
);

export default HomeLayout;
