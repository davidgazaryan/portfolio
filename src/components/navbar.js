import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/Close';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
    setIsExpanded(false);
  },[location]);



  const toggleNavbar = () => {
    setExpandNavbar((prev) => !prev);
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`navbar ${expandNavbar ? 'expanded' : ''}`}>
      <div className='toggleButton'>
        <button onClick={toggleNavbar}>
          {isExpanded ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
