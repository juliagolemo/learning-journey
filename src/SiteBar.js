import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; // Import Box Icons CSS
import './SiteBar.css';
import { Link } from 'react-router-dom';


const SiteBarItem = ({ text, link_path, icon }) => {
  return (
    <li>
      <Link to={link_path}>
        <i className={icon}></i>
        <span className="links_name">{text}</span>
      </Link>
      <span className="tooltip">{text}</span>
    </li>
  );
};


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

        <SiteBarItem text={'Home'} link_path={'/'} icon={'bx bxs-home-circle'} />
        <SiteBarItem text={'Dashboard'} link_path={'/technologies'} icon={'bx bx-grid-alt'} />
        <SiteBarItem text={'About'} link_path={'/about'} icon={'bx bx-user'} />
        <SiteBarItem text={'Tutorial'} link_path={'/tutorial'} icon={'bx bxs-book-open'} />
    
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
