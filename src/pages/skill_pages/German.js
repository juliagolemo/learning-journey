import React from 'react';
import CardsList from '../../components/CardsList'; 

const german_images_path = '/images/cards/german/';

const cards_list = [
  { id: 'nebensaetze', title: 'Nebensätze', date: '2024-10-01', image: `${german_images_path}german.jpg` },
]

export default function German() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
