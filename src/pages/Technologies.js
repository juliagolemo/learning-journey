import React from 'react';
import { Link } from 'react-router-dom';
import './Technologies.css';

const technologies = [
  {
    name: 'Excel',
    image: '/images/Excel.png',
    path: 'excel',
    description: 'Microsoft Excel to program do arkuszy kalkulacyjnych.',
  },
  {
    name: 'Azure',
    image: '/images/Azure.png',
    path: 'azure',
    description: 'Microsoft Azure to usługa chmury obliczeniowej.',
  },
  {
    name: 'GoLang',
    image: '/images/gofer.png',
    path: 'golang',
    description: 'GoLang to język programowania stworzony przez Google.',
  },
  {
    name: 'Git',
    image: '/images/git.png',
    path: 'git',
    description: 'Git to rozproszony system kontroli wersji.',
  },
  {
    name: 'Power Automate',
    image: '/images/power_automate.png',
    path: 'power-automate',
    description: 'Power Automate to narzędzie do automatyzacji procesów biznesowych od Microsoft.',
  },
  {
    name: 'SAP HCM',
    image: '/images/sap_success_factors.png',
    path: 'sap',
    description: 'SAP HCM to moduł SAP do zarządzania zasobami ludzkimi (Human Capital Management).',
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