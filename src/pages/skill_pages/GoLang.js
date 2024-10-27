import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'; 

const cards = [
  { id: 'golang_var', title: ' Variable: What is variable? Types (string, int, bool, float32,float64)', date: '2024-10-01', image: '/images/0_SoqCeEz9EctJBXKw.png' },
];

export default function GoLang() {
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
