import React, { useEffect, useState } from 'react';
import Headeruser from '../component/Headeruser';
import Footer from '../component/Footer';
import '../styles/DisplayBooking.css';

const DisplayBooking = () => {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/Booking/details`);
                if (!response.ok) {
                    throw new Error('Failed to fetch booking details');
                }
                const data = await response.json();
                setBookingDetails(data);
            } catch (error) {
                setError(error.message);
                console.error('Error:', error);
            }
        };

        fetchBookingDetails();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (bookingDetails.length === 0) {
        return <p>No booking details found.</p>;
    }

    return (
        <div>
            <Headeruser />
            <div className="booking-container">
                <h2 className="page-title">Booking Details</h2>
                <div className="booking-grid">
                    {bookingDetails.map((booking) => (
                        <div key={booking._id} className="booking-card">
                            <h3 className="service-name">{booking.serviceName}</h3>
                            <div className="booking-info">
                                <p><strong>Problem Description:</strong> {booking.problemDescription}</p>
                                <p><strong>Estimated Charges:</strong> ${booking.estimatedCharges}</p>
                                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                                <p><strong>Time:</strong> {booking.time}</p>
                                <p><strong>Service Level:</strong> {booking.serviceLevel}</p>
                                {booking.image && (
                                    <div className="booking-image">
                                        <img src={`http://localhost:5000/${booking.image}`} alt="Booking" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DisplayBooking;
