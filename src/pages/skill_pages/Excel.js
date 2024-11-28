import React from 'react';
import CardsList from '../../components/CardsList';

const excel_images_path = '/images/cards/excel/';

const cards_list = [
  { id: 'excel_if', title: 'Excel IF function & conditions', date: '2024-10-01', image: `${excel_images_path}excel_1.jpg`},
  { id: 'excel_pivot_table', title: 'Pivot Table', date: '2024-11-07', image: `${excel_images_path}pivot_table.png`},
  { id: 'excel_attendance_list', title: 'Attendance List', date: '2024-11-07', image: `${excel_images_path}excel_card.webp`},
  { id: 'home_budget', title: 'Home Budget', date: '2024-11-24', image: `${excel_images_path}home_excel.jpg`},
  { id: 'excel_vlookup', title: 'Excel functions (VLOOKUP, Index Function, Match Function)', date: '2024-11-25', image: `${excel_images_path}excel_new.jpg`},
  { id: 'sales_report', title: 'Sales Report', date: '2024-11-25', image: `${excel_images_path}sales_report.webp`},
];


export default function Excel() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
