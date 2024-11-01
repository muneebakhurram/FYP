import React, { useState } from 'react';
import Footer from '../component/Footer';
import Headeruser from '../component/Headeruser';

function DisplayServices() {
  // Placeholder state to store services
  const [services, setServices] = useState([]);

  return (
    <div className="DisplayServices">
      <Headeruser /> {/* Render the Headeruser component here */}
      <div className="homeContainer">
        <div className="homeContent">
          <h2>Available Services</h2>
          <div className="services-card-container">
            {services.length > 0 ? (
              services.map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image || 'placeholder-image.jpg'} alt={service.name} className="service-image" />
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p>Rs. {service.price}</p>
                    <span className="status">Estimated</span>
                    <p className="provider">BY: {service.provider}</p>
                  </div>
                  <button className="book-now">Book Now</button>
                  <button className="favorite-btn">♡</button>
                </div>
              ))
            ) : (
              <p>No services available yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer /> {/* Render the Footer component here */}
    </div>
  );
}

export default DisplayServices;
