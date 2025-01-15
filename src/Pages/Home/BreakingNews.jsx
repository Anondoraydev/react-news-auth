import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex p-6 bg-[#F3F3F3] mt-7">
            <button className='btn btn-secondary '>Breaking News</button>
            <Marquee className="font-semibold text-[#403F3F" pauseOnHover={true} speed={100}>
                <Link to='/'>
                    I can be a React component, multiple React components, or just some text......
                </Link>  
                <Link to='/'>
                    I can be a React component, multiple React components, or just some text......
                </Link>  
                <Link to='/'>
                    I can be a React component, multiple React components, or just some text......
                </Link>  
                </Marquee>
        </div>
    );
};

export default BreakingNews;