import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'; 

const cards = [
  { id: 'example', title: 'Azure wprowadzenie ch. 1', date: '2024-10-01', image: '/images/microsoft-azure.png'},
  { id: 'example2', title: 'Azure Blob ch. 2', date: '2024-10-02', image: '/images/Blob-Storage-In-Azure.png' },
  { id: 'example2', title: 'Azure Subscription ch. 2', date: '2024-10-02', image: '/images/Blob-Storage-In-Azure.png' },
];

export default function Azure() {
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
