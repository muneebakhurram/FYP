import React from 'react';
import admin from '../assests/images/admin.png';
import { useNavigate } from 'react-router-dom';
import '../styles/MainContent.css';

const MainContent = () => {
    const navigate = useNavigate();

    // Functions for button navigation
    const handleSignupClick = () => navigate('/consumersignup');
    const handleAcceptRequest = () => navigate('/accept-requests');
    const handleVerifyService = () => navigate('/verify-service');
    const handleBlockService = () => navigate('/block-service');

    return (
        <div>
            <div className="service-container">
                <div className="text-section">
                    <h1 className="main-heading">Expert Management of<br /> Home Service Providers</h1>
                    <p className="sub-heading">Efficiently overseeing service providers ensures</p>
                    <p className="highlight-text">quality and reliability. Manage and oversee service</p>
                    <p className="highlight-text">providers by verifying their credentials</p>
                </div>

                <div className="image-section">
                    <img src={admin} alt="Background Design" className="background-decore" />
                </div>
            </div>

            <div className="cards-container">
                <div className="card">
                    <h3>Accept Requests</h3>
                    <p>Pending requests: 10</p>
                    <button className="btn btn-primary" onClick={handleAcceptRequest}>View Requests</button>
                </div>
                <div className="card">
                    <h3>Verify Account</h3>
                    <p>Pending verifications: 5</p>
                    <button className="btn btn-primary" onClick={handleVerifyService}>View Providers</button>
                </div>
                <div className="card">
                    <h3>Block Account</h3>
                    <p>Blockable Providers: 3</p>
                    <button className="btn btn-danger" onClick={handleBlockService}>View Blocked Users</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
