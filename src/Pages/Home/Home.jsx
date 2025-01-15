import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <h2 className='font-pop'>This is home</h2>
        </div>
    );
};

export default Home;