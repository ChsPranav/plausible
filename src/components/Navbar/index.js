import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar  navbar-expand-sm">
                <div className="container navContainer">
                    <a href="/" className="navbar-brand text-uppercase">Dashboard Analytics</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" id="navbarButton">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link text-uppercase mx-1">Home</a>
                            <a href="#" className="nav-item nav-link text-uppercase mx-1">Dashboard</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Navbar;