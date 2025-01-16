import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RightSiteNav from './Shared/RightSiteNav/RightSiteNav';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar/Navbar';


const News = () => {
    const { id } = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then((response) => response.json())
            .then((data) => {
                const singleNews = data.find((item) => item._id === id);
                setNews(singleNews);
            });
    }, [id]);

    return (
        <div>
            <Header />
            <Navbar />
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className="text-text-3xl">Dragon News</h2>
                    <p>{id}</p>
                    <img src={news.image_url} alt="" />
                    <p>{news.details}</p>

                </div>
                <div>
                    <RightSiteNav />
                </div>
            </div>
        </div>
    );
};

export default News;

