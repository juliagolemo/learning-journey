import React from 'react';
import CircleSkillsList from '../components/CircleSkillsList';

const technologies = [
  {
    name: 'Excel',
    image: '/images/Excel.png',
    path: 'excel',
    description: 'Microsoft Excel is a spreadsheet program.',
  },
  {
    name: 'Azure',
    image: '/images/Azure.png',
    path: 'azure',
    description: 'Microsoft Azure is a cloud computing service.',
  },
  {
    name: 'GoLang',
    image: '/images/gofer.png',
    path: 'golang',
    description: 'GoLang is a programming language created by Google.',
  },
  {
    name: 'Git',
    image: '/images/git.png',
    path: 'git',
    description: 'Git is a distributed version control system.',
  },
  {
    name: 'German',
    image: '/images/flag.png',
    path: 'german',
    description: 'My progress in learning German.',
  },
  {
    name: 'Web Development',
    image: '/images/webdevelopment.webp',
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
