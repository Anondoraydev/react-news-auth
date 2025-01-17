
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [categories, setcategories] = useState([]);
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcategories(data))
    })

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    return (
        <div className='space-y-1'>
            <h2 className="text-xl font-semibold text-black mb-4 ">All Caterogy </h2>
            {
                categories.map(categoriy =>
                    <Link to={`categoriy/${categoriy.id}`} className='block text-NavColer font-semibold px-[50px] py-3 hover:font-semibold hover:bg-[#E7E7E7] hover:text-gray-500'
                        key={categoriy.id}>
                        {categoriy.name}</Link>)
            }
            {news.map((anews) => (
                <div key={anews.category_id} className='pb-8'>
                    <img src={anews.author.img} alt="" />
                    <h2 className='mt-4 text-xl font-semibold text-[#403F3F}'>{anews.title}</h2>
                    <div className='mt-5 flex justify-between p-2'>
                        <p className='text-[13px]'>{anews.author.name}</p>
                        <p className='text-[13px] text-[#9F9F9F]'>{anews.author.published_date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeftSiteNav;