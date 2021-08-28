import React from 'react';

import Body from '../components/AddProduct/Body';
import SideNav from '../components/SideNav';

const AddProductLayout = () => (
    <div className='flex'>
        <SideNav />
        <Body />
    </div>
);

export default AddProductLayout;
