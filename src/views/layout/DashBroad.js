import React from 'react';

import Body from '../components/DashBroad/Body';
import SideNav from '../components/SideNav';

const DashBroadLayout = () => (
    <div className='flex'>
        <SideNav />
        <Body />
    </div>
);

export default DashBroadLayout;
