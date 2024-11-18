import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <nav className="navbar bg-blue-600 text-white py-4 shadow-md">
        <div className='container mx-auto px-4'>
        <div className="container mx-auto mb-4">
            <Link to="/"className='logo text-3xl font-extrabold hover:text-gray-200'>Grateau Marketing Agency</Link>
            </div>
            <ul className="nav-links flex flex-wrap justify-center space-x-6 text-lg">
                <li><Link to="/" className='hover:text-gray-200 transition duration-300'>Home Page</Link></li>
                <li><Link to='/agencyoverview'  className='hover:text-gray-200 transition duration-300'>Agency Overview</Link></li>
                <li><Link to="/services"  className='hover:text-gray-200 transition duration-300'>Services</Link></li>
                <li><Link to="/casestudies"  className='hover:text-gray-200 transition duration-300'>Case Studies</Link></li>
                <li><Link to='/blogpage'  className='hover:text-gray-200 transition duration-300'> Blog Page</Link></li>
                <li><Link to="/contact"  className='hover:text-gray-200 transition duration-300'>Contact</Link></li>
                <li><Link to='/clientportal'  className='hover:text-gray-200 transition duration-300'>Client Portal</Link></li>
                <li><Link to='/seoauditpage'  className='hover:text-gray-200 transition duration-300'>SEOAuditPage</Link></li>
            </ul>
        </div>
      </nav>
  );
};

export default Navbar;

