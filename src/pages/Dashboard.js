import React from 'react';
import './Dashboard.css'; 

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p className="message">
        Due to a temporary loss of access to the Power BI Service, the dashboard is currently available only as a downloadable file from our GitHub repository. 
        Please follow the link below to access the file:
      </p>
      <span className="download-text">
        Download Dashboard File:&nbsp;
      </span>
      <a 
        href="https://github.com/juliagolemo/Analysis-of-features-significance-in-obesity" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="download-link"
      >
        https://github.com/juliagolemo/Analysis-of-features-significance-in-obesity
      </a>
    </div>
  );
}
