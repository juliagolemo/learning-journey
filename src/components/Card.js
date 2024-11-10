import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ card }) => {
    return (
      <div key={card.id} className="card">
        <img src={card.image} alt={card.title} className="card-image" />
        <div className="card-content">
          <h3>{card.title}</h3>
          <p>{card.date}</p>
          <Link to={`/classes/${card.id}`} className="card-link">Read More</Link>
        </div>
      </div>
    );
  };

export default Card;