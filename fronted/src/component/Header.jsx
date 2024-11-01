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
            <a href="#ourservices">Services</a> 
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact Us</a>
        </nav>
        <div className="search-login">
            
         
            <button>Login</button>
        </div>
    </header>
    );
};

export default Header;
