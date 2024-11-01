import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/consumersignup.css";
import csignupImage from "../assests/images/signup2.jpg"; // Ensure the correct path here
import axios from "axios";
import Header from "../component/Header"; // Import the Header component
import Footer from "../component/Footer"; // Import the Footer component

export const ConsumerSignup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    address: '',
    password: '',
    confirmpassword: ''
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name,
      email: form.email,
      phonenumber: `${form.countryCode}${form.phone}`, // Combine selected country code and phone number
      address: form.address,
      password: form.password,
      confirmpassword: form.confirmpassword
    };

    // Validate phone number
    const phoneRegex = /^\d{7}$/; // 7-digit phone number
    const newErrors = {};
    if (!phoneRegex.test(form.phone)) newErrors.phone = "Invalid phone format.";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/Auth/createuser', formData);
      if (response.data.success) {
        setSuccess("Consumer created successfully!");
        setError({});
        navigate('/login'); // Redirect to login page after successful signup
      }
    } catch (err) {
      setError({ general: err.response ? err.response.data.message : "An error occurred. Please try again." });
      setSuccess('');
    }
  };

  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <section className="container py-5 h-100 flex-grow-1">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src={csignupImage} className="img-fluid" alt="Sign Up Illustration" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div className="form-container shadow p-4">
              <form onSubmit={handleSubmit}>
                {error.general && <p className="error-message">{error.general}</p>}
                {error.phone && <p className="error-message">{error.phone}</p>}
                {success && <p className="success-message">{success}</p>}

                {/* Name Field */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control form-control-lg" 
                         value={form.name} onChange={handleChange} 
                         placeholder="Enter your name" required />
                </div>

                {/* Email Field */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" className="form-control form-control-lg" 
                         value={form.email} onChange={handleChange} 
                         placeholder="Enter your email" required />
                </div>

                {/* Phone Number Field with Country Code */}
                <div className="form-outline mb-0"> {/* Changed margin-bottom to 0 */}
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <div className="phone-input">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="phone-code"
                      required
                    >
                      <option value="">Select code</option>
                      <option value="+92300">+92 300 (Mobilink)</option>
                      <option value="+92345">+92 345 (Telenor)</option>
                      <option value="+92321">+92 321 (Warid)</option>
                      <option value="+92331">+92 331 (Ufone)</option>
                      <option value="+92312">+92 312 (Zong)</option>
                      <option value="+92581">+92 581 (Local)</option>
                    </select>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className="phone-number"
                      required
                    />
                  </div>
                  {error.phone && <p className="error">{error.phone}</p>}
                </div>

                {/* Address Field */}
                <div className="form-outline mb-4"> {/* Keep margin-bottom for spacing */}
                  <label className="form-label" htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" className="form-control form-control-lg" 
                         value={form.address} onChange={handleChange} 
                         placeholder="Enter your address" required />
                </div>

                {/* Password Field */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" className="form-control form-control-lg" 
                         value={form.password} onChange={handleChange} 
                         placeholder="Enter your password" required />
                </div>

                {/* Confirm Password Field */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="confirmpassword">Confirm Password</label>
                  <input type="password" id="confirmpassword" name="confirmpassword" className="form-control form-control-lg" 
                         value={form.confirmpassword} onChange={handleChange} 
                         placeholder="Confirm your password" required />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>

                <p className="text-center mt-3">Already have an account? <a href="/login" className="register-link">Log In</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConsumerSignup;
