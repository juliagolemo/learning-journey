import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css'; 

const cards = [
  { id: 'git_fundamentals', title: 'Git Fundamentals', date: '2024-10-01', image: '/images/git_git.png'},
  { id: 'git_mr_and_cr', title: 'Git Merge Requests and Code Reviews', date: '2024-10-28', image: '/images/git_github.png'},
];

export default function Git() {
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
