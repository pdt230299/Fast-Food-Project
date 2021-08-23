import React from 'react';

import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Slider from '../components/Home/Slider';
import Body from '../components/Home/Body';

const HomeLayout = () => (
    <div className='overflow-x-hidden'>
        <Header />
        <Slider />
        <Body />
        <Footer />
    </div>
);

export default HomeLayout;
