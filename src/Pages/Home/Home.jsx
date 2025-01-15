import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import LeftSiteNav from '../Shared/LeftSiteNav/LeftSiteNav';
import RightSiteNav from '../Shared/RightSiteNav/RightSiteNav';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar /> 
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSiteNav />
                </div>
                <div className='md:col-span-2'>
                    <h2 className='text-4xl'>News comming soon</h2>
                </div>
                <div>
                    <RightSiteNav />
                </div>
            </div>

        </div>
    );
};

export default Home;