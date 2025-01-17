import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RightSiteNav from './Shared/RightSiteNav/RightSiteNav';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navbar/Navbar';
import { FaArrowLeft } from "react-icons/fa6";

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
            <div className='grid md:grid-cols-4 '>
                <div className='col-span-3 m-8'>
                    <h2 className=" text-2xl text-black pb-5 font-semibold">Dragon News</h2>
                    <img src={news.image_url} alt="" />
                    <p className='py-5 text-black text-2xl font-bold '>{news.title}</p>
                    <h2 className=' text-[#706F6F] font-normal '>{news.details}</h2>
                    <button className='mt-9 '><Link to={'/'} className='py-2 px-6 text-white bg-[#D72050] flex items-center gap-2'> <FaArrowLeft/> All news in this category</Link></button>
                </div>
                <div>
                    <RightSiteNav />
                </div>
            </div>
        </div>
    );
};

export default News;

