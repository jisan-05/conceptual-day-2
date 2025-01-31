import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);

    const location = useLocation()
    


    if (loading) {
        return (
            <h2 className="mx-auto w-20">
                LOADING{" "}
                <span className="loading loading-spinner  w-20 bg-blue-600"></span>
            </h2>
        );
    }
    if (!user) {
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
    }
    return children;
};

export default PrivetRoute;
