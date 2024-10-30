import React from 'react';
import { Link } from 'react-router-dom';
import './Technologies.css';

const technologies = [
  {
    name: 'Excel',
    image: '/images/Excel.png',
    path: 'excel',
    description: 'Microsoft Excel is a spreadsheet program.',
  },
  {
    name: 'Azure',
    image: '/images/Azure.png',
    path: 'azure',
    description: 'Microsoft Azure is a cloud computing service.',
  },
  {
    name: 'GoLang',
    image: '/images/gofer.png',
    path: 'golang',
    description: 'GoLang is a programming language created by Google.',
  },
  {
    name: 'Git',
    image: '/images/git.png',
    path: 'git',
    description: 'Git is a distributed version control system.',
  },
  {
    name: 'German',
    image: '/images/flag.png',
    path: 'german',
    description: 'My progress in learning German.',
  },
  {
    name: 'SAP HCM',
    image: '/images/sap_success_factors.png',
    path: 'sap',
    description: 'SAP HCM is an SAP module for Human Capital Management.',
  }
];


function Technologies() {
  return (
    <div className="circle-container">
      <div className="circle-content">
        {technologies.map((tech, index) => (
          <div key={index} className={`circle-item item-${index + 1}`}>
            <Link to={`/technologies/${tech.path}`} className="circle-link">
              <div className="circle-item-inner">
                <img src={tech.image} alt={tech.name} className="circle-image" />
                <p className="circle-name">{tech.name}</p>
                <div className="circle-description">
                  {tech.description}
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="circle-center">
          <h2>Tools</h2>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
