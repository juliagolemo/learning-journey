import React from 'react';
import CardsList from '../../components/CardsList';

const cards_list = [
  { id: 'example', title: 'API', date: '2024-11-09', image: '/images/cards/web_development/api.png'},
];

export default function WebDevelopment() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
