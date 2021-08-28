import React from 'react';

import Body from '../components/Products/Body';
import SideNav from '../components/SideNav';

const ProductsLayout = () => (
    <div className='flex'>
        <SideNav />
        <Body />
    </div>
);

export default ProductsLayout;
