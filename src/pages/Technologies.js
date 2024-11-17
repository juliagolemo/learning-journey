import React from 'react';
import CircleSkillsList from '../components/CircleSkillsList';

const cards_path = '/images/cards/';

const technologies = [
  {
    name: 'Excel',
    image: `${cards_path}excel/Excel.png`,
    path: 'excel',
    description: 'Microsoft Excel is a spreadsheet program.',
  },
  {
    name: 'Azure',
    image: `${cards_path}azure/Azure.png`,
    path: 'azure',
    description: 'Microsoft Azure is a cloud computing service.',
  },
  {
    name: 'GoLang',
    image: `${cards_path}golang/gofer.png`,
    path: 'golang',
    description: 'GoLang is a programming language created by Google.',
  },
  {
    name: 'Git',
    image: `${cards_path}git/git.png`,
    path: 'git',
    description: 'Git is a distributed version control system.',
  },
  {
    name: 'German',
    image: `${cards_path}german/flag.png`,
    path: 'german',
    description: 'My progress in learning German.',
  },
  {
    name: 'Web Development',
    image: `${cards_path}web_development/webdevelopment.webp`,
    path: 'webdevelopment',
    description: 'Process of a Web Development.',
  }
];

function Technologies() {
  return (
    <CircleSkillsList technologies={technologies} />
  );
}

export default Technologies;
