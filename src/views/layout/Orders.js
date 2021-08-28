import React from 'react';

import Body from '../components/Orders/Body';
import SideNav from '../components/SideNav';

const OrdersLayout = () => (
    <div className='flex'>
        <SideNav />
        <Body />
    </div>
);

export default OrdersLayout;
