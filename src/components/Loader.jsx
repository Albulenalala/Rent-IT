// src/components/Loader.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Adjust this path if needed
import './Loader.css'; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading Logo" className="h-32" />
      {/* <h2 className="mt-4 text-xl"></h2> */}
    </div>
  );
};

export default Loader;
