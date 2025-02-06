import React from 'react';
import CardsList from '../../components/CardsList';

const golang_images_path = '/images/cards/golang/';


const cards_list = [
  { id: 'golang_var', title: ' Variable: What is variable? Types (string, int, bool, float32,float64)', date: '2024-10-01', image: `${golang_images_path}0_SoqCeEz9EctJBXKw.png` },
  { id: 'golang_func', title: ' Functions', date: '2024-10-01', image: `${golang_images_path}golangheader.png` },
  { id: 'golang_loops', title: ' Loops ', date: '2024-10-01', image: `${golang_images_path}golang-structs.webp` },
  { id: 'golang_conditions', title: ' Conditions ', date: '2024-10-01', image: `${golang_images_path}golang-pic.png` },
  { id: 'strings', title: ' Strings - Python ', date: '2024-10-01', image: `${golang_images_path}golang-pic.png` },
];

export default function GoLang() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
