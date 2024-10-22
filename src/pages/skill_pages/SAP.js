import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'; 

const cards = [
  { id: 'example', title: 'SAP ch. 1', date: '2024-10-01', image: '/images/sap_img.png'},
  { id: 'example', title: 'SAP ch. 2', date: '2024-10-01', image: '/images/sap_img.png'}
];

export default function SAP() {
  return (
    <div className="cards-container">
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.date}</p>
            <Link to={`/classes/${card.id}`} className="card-link">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
