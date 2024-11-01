import React from 'react';
import '../styles/Dashboard.css';
import Footer from '../component/Footer';
import MainContent from '../component/Maincontent'; // Ensure the import name matches
import Headeradmin from '../component/Headeradmin'; // Corrected import name for Headeradmin

function Home() {
  return (
    <div className="home">
      <Headeradmin /> {/* Render the Headeradmin component here */}
      <div className="homeContainer">
        <div className="homeContent"> {/* Wrap the content in a div for layout */}
          <MainContent /> {/* Use the MainContent component here */}
        </div>
      </div>
      <Footer /> {/* Render the Footer component here */}
    </div>
  );
}

export default Home;
