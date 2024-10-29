import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; // Import Box Icons CSS
import './SiteBar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <i className='bx bx-world bx-sm icon'></i>
        <div className="logo_name">Learning Journey</div>
        <i className='bx bx-menu' id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/">
            <i className='bx bxs-home-circle'></i>
            <span className="links_name">Home</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="/technologies">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/about">
            <i className='bx bx-user'></i>
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to="/tutorial">
            <i className='bx bxs-book-open'></i>
            <span className="links_name">Tutorial</span>
          </Link>
          <span className="tooltip">Tutorial</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            {/* Opcjonalnie dodaj obrazek profilowy */}
            {/* <img src={profileImg} alt="profileImg" /> */}
            <div className="name_job">
              <div className="name">Julia Golemo</div>
              <div className="job">Student UKEN</div>
            </div>
          </div>
          <i className='bx bx-log-out' id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
