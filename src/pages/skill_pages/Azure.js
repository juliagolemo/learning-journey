import React from 'react';
import CardsList from '../../components/CardsList';

const cards_list = [
  { id: 'azure_blob', title: 'Azure Blob ch. 2', date: '2024-10-02', image: '/images/Blob-Storage-In-Azure.png' },
  { id: 'azure_fundamentals', title: 'Azure Fundamentals', date: '2024-10-02', image: '/images/microsoft-azure.png' },
  { id: 'azure_app_service', title: 'Azure App Service', date: '2024-10-02', image: '/images/azure.png' },
  { id: 'what_is_azure', title: 'What is Azure', date: '2024-10-26', image: '/images/Microsoft Azure Blog.webp' },
];

export default function Azure() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
