import React, { Component, useContext, useState } from 'react';
import Auth from '../context/Auth';
import { logout } from "../services/AuthApi";
import { getItem } from '../services/LocalStorage';

export function Header() {
    const { isAuthentificated, setIsAuthentificated } = useContext(Auth);

    const [user, setUser] = useState(JSON.parse(getItem("user")));

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                    {(!isAuthentificated) ? (
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/register">Register</a>
                            <a className="nav-link" href="/login">Login</a>
                        </div>
                    ) : (
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href={"/" + user.login}>Blog</a>
                        </div>
                    )}

            </div>
        </nav>
    )
}