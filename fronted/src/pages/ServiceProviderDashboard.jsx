import React, { useState } from 'react';
import Headerserviceprovider from '../component//HeaderServicerpovider' ;// Adjust the path if necessary
import Footer from '../component/Footer'; // Adjust the path if necessary
import '../styles/serviceproviderdashboard.css'; // Reuse the existing CSS
import decore from '../assests/images/decore.png';
import mainpic from '../assests/images/pngegg.png';
const ServiceProviderDashboard = ({ user }) => {
    const [services, setServices] = useState([]); // State to manage services

    const addService = () => {
        // Logic to add a service
        const newService = prompt("Enter the service name:"); // Simple prompt to add a service
        if (newService) {
            setServices([...services, newService]); // Add service to the list
        }
    };

    return (
        <div>
            {/* Header */}
            <Headerserviceprovider user={user} onLogout={() => {}} />

            <div className="service-container">
                <div className="text-section">
                    <h1 className="main-heading">Simplify Your Life with Our Professional Home Service</h1>
                    <p className="sub-heading">We offer home services designed to maximize efficiency,</p>
                    <p className="highlight-text">minimizing time, energy, and cost.</p>
                </div>
                <div className="image-section">
                    <img src={decore} alt="Background Design" className="background-decore" />
                    <img src={mainpic} alt="Handyman with tools" className="main-pic" />
                </div>
            </div>

            {/* Body Section with Card */}
            <main className="main-content">
                <section id="add-service" className="card-section">
                    <div className="service-card">
                        <button onClick={addService} className="add-service-button">+</button>
                    </div>
                    <div className="service-list">
                        {services.length > 0 ? (
                            services.map((service, index) => (
                                <div key={index} className="service-item">
                                    {service}
                                </div>
                            ))
                        ) : (
                            <p className="service-text">No service added</p> // Placeholder text
                        )}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ServiceProviderDashboard;