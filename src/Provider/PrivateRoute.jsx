import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {

    const {user, userLoading} = use(AuthContext);

    const location = useLocation();

    if(userLoading){
        return <Loader></Loader>
    }

    if(user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;