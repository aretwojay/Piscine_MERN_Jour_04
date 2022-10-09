import Auth from "../context/Auth";
import  React, { Component, useContext} from 'react';
import { Navigate, Outlet } from "react-router-dom";


const AuthentificatedRoute = ({ path, component }) => {
    const { isAuthentificated } = useContext(Auth);

    return isAuthentificated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    )
}

export default AuthentificatedRoute;