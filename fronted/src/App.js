import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login'; // Adjust the path if necessary
import Consumersignup from './pages/Consumersignup'; // Adjust the path if necessary
import './App.css'; // Your CSS file for styling
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import AdminDashboard from './pages/AdminDashboard';
import Header from './component/Headeradmin'; // Import the Header component
import DisplayServices from './pages/DisplayServices'; //
import ServiceProviderDashboard from './pages/ServiceProviderDashboard'; //
import BookingForm from './pages/BookingForm';
import DisplayBooking from './pages/DisplayBooking';
function App() {
  return (
    <Router>
      <div className="App">
        <ConditionalHeader />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/consumersignup" element={<Consumersignup />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/mainpage" element={<MainPage />} />
          <Route exact path="/dashboard" element={<AdminDashboard />} />
          <Route exact path="/displayservices" element={<DisplayServices />} />
          <Route exact path="/serviceproviderdashboard" element={<ServiceProviderDashboard />} />
          <Route exact path="/bookingform" element={<BookingForm />} />
          <Route exact path="/displaybooking" element={<DisplayBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component to conditionally render Header based on the current route
function ConditionalHeader() {
  const location = useLocation();
  
  // Only show the Header on the Dashboard page
  const showHeader = location.pathname === "/dashboard"; 

  return showHeader ? <Header /> : null; // Render Header only if on Dashboard
}

export default App;
