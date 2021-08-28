import React from 'react';

import Body from '../components/Cart/Body';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';

const CartLayout = () => (
    <div>
        <Header />
        <Body />
        <div className='mt-40'>
            <Footer />
        </div>
    </div>
);

export default CartLayout;
