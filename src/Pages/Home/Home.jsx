import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import LeftSiteNav from '../Shared/LeftSiteNav/LeftSiteNav';
import RightSiteNav from '../Shared/RightSiteNav/RightSiteNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewCard from './NewCard';

const Home = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-[75px]'>
                <div>
                    <LeftSiteNav />
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map(anews => <NewCard
                            key={anews._id}
                            news={anews}
                        >
                        </NewCard>)
                    }
                </div>
                <div>
                    <RightSiteNav />
                </div>
            </div>

        </div>
    );
};

export default Home;