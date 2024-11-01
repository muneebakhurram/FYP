import React from "react";
import logo from '../assests/images/logo.png'; // Adjust the path if necessary
import "./HeaderServiceprovider.css";

const HeaderServiceProvider = ({ user, onLogout }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`No section found with id: ${id}`); // Corrected this line
        }
    };

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
                <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
                <a href="#add-service" onClick={() => scrollToSection('add-service')}>Add Service</a>
                <a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
                <a href="#footer" onClick={() => scrollToSection('footer')}>Contact Us</a>
            </nav>
            <div className="search-login d-flex align-items-center">
                {user ? (
                    <div className="user-greeting">
                        <span>Welcome, {user.name}!</span>
                        <button onClick={onLogout} className="logout-button">Logout</button>
                    </div>
                ) : (
                    <a href="/login">Login</a>
                )}
            </div>
        </header>
    );
};

export default HeaderServiceProvider;
