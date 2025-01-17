import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({ children }) => {
    const { user, lodding } = useContext(AuthContext)

    const location = useLocation()
    console.log(location.pathname);



    if (lodding) {
        return <span className="absolute top-1/2 left-1/2 transform -translate-1/2 loading loading-spinner text-warning loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouts;