import React from 'react';
import CardsList from '../../components/CardsList';

const azure_images_path = '/images/cards/azure/';

const cards_list = [
  { id: 'azure_blob', title: 'Azure Blob ch. 2', date: '2024-10-02', image: `${azure_images_path}Blob-Storage-In-Azure.png` },
  { id: 'azure_fundamentals', title: 'Azure Fundamentals', date: '2024-10-02', image: `${azure_images_path}microsoft-azure.png` },
  { id: 'azure_app_service', title: 'Azure App Service', date: '2024-10-02', image: `${azure_images_path}azure.png` },
  { id: 'what_is_azure', title: 'What is Azure', date: '2024-10-26', image:  `${azure_images_path}Microsoft Azure Blog.webp` },
];

export default function Azure() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
