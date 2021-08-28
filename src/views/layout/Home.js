import React from 'react';

import Slider from '../components/Home/Slider';
import Body from '../components/Home/Body';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';

const HomeLayout = () => (
    <div>
        <Header />
        <Slider />
        <Body />
        <Footer />
    </div>
);

export default HomeLayout;
