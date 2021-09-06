import React from 'react';

import Body from '../components/EditProduct/Body';
import SideNav from '../components/SideNav';

const EditProductLayout = () => (
    <div className='flex'>
        <SideNav />
        <Body />
    </div>
);

export default EditProductLayout;
