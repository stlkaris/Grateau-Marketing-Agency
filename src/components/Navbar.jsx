import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="container">
            <Link to="/"className='logo'>Grateau Marketing Agency</Link>
            <ul className="nav-links">
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/agencyoverview">Agency Overview</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/casestudies">Case Studies</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to='/clientportal'>Client Portal</Link></li>
            </ul>
        </div>
      </nav>
  );
};

export default Navbar;

