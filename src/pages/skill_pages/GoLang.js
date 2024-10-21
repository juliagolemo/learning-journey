import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'; 

const cards = [
  { id: 'example', title: 'Gofer Szymix ch. 1', date: '2024-10-01', image: '/images/gofer_zywy.jpg' },
  { id: 'example2', title: 'Gofer Szymix ch. 2', date: '2024-10-02', image: '/images/gofer_zywy.jpg' },
  { id: 'excel_pivot_table', title: 'Gofer Szymix 3', date: '2024-10-03', image: '/images/gofer_zywy.jpg' },
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
