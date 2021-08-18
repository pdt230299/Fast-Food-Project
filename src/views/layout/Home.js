import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Home/Slider';

const HomeLayout = () => (
    <div>
        <Header />
        <Slider />
        <p>Home Page</p>
        <Footer />
    </div>
);

export default HomeLayout;
