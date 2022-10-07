import React, { Component } from 'react';

export function Header()
{
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="navbar-nav">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/register">Register</a>
                    <a className="nav-link" href="/login">Login</a>
                </div>
            </div>
        </nav>
    )
}