import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Subnavbar.css';
import logo from '../../../../Assets/logo.webp';
import Topbar from '../Topbar/Topbar';
import sdgindia from "../../../../Assets/sdg-india.png"
const Subnavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Topbar />
      <div className="nav-outer">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* Logo Section */}
            <NavLink className="navbar-brand me-auto desktop-logo" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            
            {/* Toggler Button */}
            <button 
              className="navbar-toggler border-0 shadow-none" 
              type="button" 
              onClick={handleToggle} 
              aria-expanded={isMenuOpen ? "true" : "false"} 
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
            
            {/* Menu Section */}
            <div className={`menu-content ${isMenuOpen ? 'show' : ''}`}>
              {/* Logo inside menu for mobile/tablet */}
              <img src={logo} alt="logo" className="menu-logo" />

              {/* Close Button */}
              <span className="close-btn" onClick={handleToggle}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" activeClassName="active">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products" activeClassName="active">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sustainability" activeClassName="active">Sustainability</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog" activeClassName="active">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq" activeClassName="active">FAQ</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/policy" activeClassName="active">Policy</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="http://ecroptoday.co.in/" target="_blank">
                    <button className='btn1'><h6>E-CROPTODAY</h6></button>
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="http://ecroptoday.co.in/" target="_blank">
                    <img src={sdgindia} alt="sdg-india"></img>
                </NavLink>
                </li>
              </ul>
            </div>

            {/* Overlay */}
            <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={handleToggle}></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Subnavbar;
