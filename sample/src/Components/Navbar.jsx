import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clgLogo from '../Assets/Images/CLGLOGO.png';

function Navbar() {
  const { pathname } = useLocation();
  const [showPortalDropdown, setShowPortalDropdown] = useState(false);

  return (
    <>
      <div className="top-strip">
        <span>Phone : +91 98765 43210</span>
        <span>Email : info@bec.edu.in</span>
      </div>
      <nav className="navbar">
        <div className="nav-left">
          <img src={clgLogo} alt="BEC Logo" className="nav-logo" />
          <div className="nav-title">
            <h1>Best Engineering College</h1>
            <p>Autonomous | Affiliated to Anna University</p>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/departments" className={pathname === '/departments' ? 'active' : ''}>Departments</Link>
          <Link to="/admissions" className={pathname === '/admissions' ? 'active' : ''}>Admissions</Link>
          <Link to="/placements" className={pathname === '/placements' ? 'active' : ''}>Placements</Link>
          
          <div className="portal-dropdown-wrapper" 
               onMouseEnter={() => setShowPortalDropdown(true)} 
               onMouseLeave={() => setShowPortalDropdown(false)}>
            <Link to="/portal" className={pathname.includes('portal') || pathname.includes('login') ? 'active' : ''}>Portal ▼</Link>
            <div className={`portal-dropdown ${showPortalDropdown ? 'show' : ''}`}>
              <Link to="/student-login">Student Portal</Link>
              <Link to="/faculty-login">Faculty Portal</Link>
              <Link to="/admin-login">Admin Portal</Link>
            </div>
          </div>

          <Link to="/contact" className="nav-btn">Contact Us</Link>
          <Link to="/login" className="nav-btn" style={{ background: '#1a1a1a' }}>Login</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
