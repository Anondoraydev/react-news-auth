import React from 'react';
import Logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
              <img className='mx-auto pt-[50px]' src={Logo} alt="Logo" />
              <p className='py-[20px] text-NavColer'>Journalism Without Fear or Favour</p>
              <p className="text-xl">{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;