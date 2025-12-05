// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Property Listing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
