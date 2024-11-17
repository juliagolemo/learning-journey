import React from 'react';
import CardsList from '../../components/CardsList';

const cards_list = [
  { id: 'excel_if', title: 'Excel IF function & conditions', date: '2024-10-01', image: '/images/cards//excel/excel_1.jpg'},
  { id: 'excel_pivot_table', title: 'Pivot Table', date: '2024-11-07', image: '/images/cards/excel/pivot_table.png'},

];

export default function Excel() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
