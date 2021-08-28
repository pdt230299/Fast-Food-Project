import React from 'react';

import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';

const ResearchLayout = () => (
    <div>
        <Header />
        <div className='flex justify-center'>
            <img className='w-1/3' src='https://www.hawthornemediagroup.com/wp-content/uploads/2019/10/MAINTENANCE.png' />
        </div>
        <Footer />
    </div>
);

export default ResearchLayout;
