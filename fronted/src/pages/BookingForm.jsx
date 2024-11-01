import React, { useState } from 'react';
import Headeruser from '../component/Headeruser';
import Footer from '../component/Footer';
import '../styles/BookingForm.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        serviceName: '',
        problemDescription: '',
        estimatedCharges: '',
        date: '',
        time: '',
        serviceLevel: '',
    });
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formData).some((value) => value === '') || !image) {
            alert('Please fill in all required fields and upload an image.');
            return;
        }

        const bookingData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            bookingData.append(key, value);
        });
        bookingData.append('image', image);

        try {
            const response = await fetch('http://localhost:5000/api/Booking/create', {
                method: 'POST',
                body: bookingData,
            });

            const result = await response.json();
            if (result.success) {
                alert("Booking created successfully!");
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to create booking.");
        }
    };

    return (
        <div>
            <Headeruser />
            <div className="booking-card">
                <h2>Booking Service</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Service Name</label>
                        <input
                            type="text"
                            name="serviceName"
                            value={formData.serviceName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Problem Description</label>
                        <textarea
                            name="problemDescription"
                            value={formData.problemDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Estimated Charges</label>
                        <input
                            type="text"
                            name="estimatedCharges"
                            value={formData.estimatedCharges}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Service Level</label>
                        <select
                            name="serviceLevel"
                            value={formData.serviceLevel}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select...</option>
                            <option value="urgent">Urgent</option>
                            <option value="regular">Regular</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Upload Image</label>
                        <input type="file" accept=".jpg,.png" onChange={handleFileChange} required />
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="back-button" onClick={() => navigate(-1)}>
                            Back
                        </button>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BookingForm;
