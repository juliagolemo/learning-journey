import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'; 

const cards = [
  { id: 'example', title: 'API', date: '2024-11-09', image: '/images/api.png'},
];

export default function WebDevelopment() {
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
