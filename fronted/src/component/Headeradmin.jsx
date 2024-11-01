import React from "react";
import logo from '../assests/images/logo.png';
import searchIcon from '../assests/images/icon.png';
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Service on Tab" />
                <div className="logo-text">
                    <h1>Service on <span className="highlight">Tab</span></h1>
                    <p>Repair and maintain</p>
                </div>
            </div>
            <nav className="navigation">
                <a href="#home">Home</a>
                <a href="#verify">Accept Request</a>
                <a href="#blockuser">Block Account</a>
                <a href="#contact">Verify Account</a>
                
            </nav>
            <div className="search-login d-flex align-items-center">
                
                <button className="btn btn-primary" onClick={() => window.location.href='/login'}>Login</button>
            </div>
        </header>
    );
};

export default Header;
