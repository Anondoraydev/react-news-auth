import React from 'react';
import Logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
              <img src={Logo} alt="Logo" />
              <p>Journalism Without Fear or Favour</p>
              <p className="text-xl">{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;