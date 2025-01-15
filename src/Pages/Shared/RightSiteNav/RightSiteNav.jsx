import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/swimming.png'
import qzone2 from '../../../assets/playground.png'
import qzone3 from '../../../assets/class.png'
import qzone4 from '../../../assets/bg.png'
const RightSiteNav = () => {
    return (
        <div >
            <div className='p-4 space-y-4 pb-6'>
                <h2 className='font-bold text-black text-2xl'>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
            <div className='p-4 mb-4 pb-6'>
                <h2 className='font-semibold text-black text-2xl pb-4'> Find Us On</h2>
                <a className='flex p-4 text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3' />
                    <span>Facebook</span>
                </a>
                <a className='flex p-4 text-lg items-center border-x ' href="">
                    <FaTwitter className='mr-3' />
                    <span>Facebook</span>
                </a>
                <a className='flex p-4 text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-3' />
                    <span>Facebook</span>
                </a>
            </div>

            {/* q zone  */}

            <div className='p-4 space-y-4 pb-6 bg-[#F3F3F3] '>
                <h2 className='font-semibold text-black text-2xl'>Q-Zone</h2>
                <img src={qzone1} alt="qzone1" />
                <img src={qzone2} alt="qzone1" />
                <img src={qzone3} alt="qzone1" />
                <img className='pt-2' src={qzone4} alt="qzone1" />

            </div>
        </div>
    );
};

export default RightSiteNav;