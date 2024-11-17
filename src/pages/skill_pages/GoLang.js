import React from 'react';
import CardsList from '../../components/CardsList';

const cards_list = [
  { id: 'golang_var', title: ' Variable: What is variable? Types (string, int, bool, float32,float64)', date: '2024-10-01', image: '/images/cards/golang/0_SoqCeEz9EctJBXKw.png' },
  { id: 'golang_func', title: ' Functions', date: '2024-10-01', image: '/images/cards/golang/golangheader.png' },
  { id: 'golang_loops', title: ' Loops ', date: '2024-10-01', image: '/images/cards/golang/golang-structs.webp' },
  { id: 'golang_conditions', title: ' Conditions ', date: '2024-10-01', image: '/images/cards/golang/golang-pic.png' },
];

export default function GoLang() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
