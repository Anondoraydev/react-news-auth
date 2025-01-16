import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcategories(data))
    })
    return (
        <div className='space-y-1'>
            <h2 className="text-xl font-semibold text-black mb-4 ">All Caterogy </h2> 
            {
                categories.map(categoriy =>
                    <Link to={`categoriy/${categoriy.id}`} className='block text-NavColer font-semibold px-[50px] py-3 hover:font-semibold hover:bg-[#E7E7E7] hover:text-gray-500'
                        key={categoriy.id}>
                        {categoriy.name}</Link>)
            }
        </div>
    );
};

export default LeftSiteNav;