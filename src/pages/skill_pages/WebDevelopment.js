import React from 'react';
import CardsList from '../../components/CardsList';

const web_development_images_path = '/images/cards/web_development/';

const cards_list = [
  { id: 'example', title: 'API', date: '2024-11-09', image: `${web_development_images_path}api.png`},
];

export default function WebDevelopment() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
