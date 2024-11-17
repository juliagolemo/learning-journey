import React from 'react';
import CardsList from '../../components/CardsList';

const git_images_path = '/images/cards/git/';

const cards_list = [
  { id: 'git_fundamentals', title: 'Git Fundamentals', date: '2024-10-01', image: `${git_images_path}git_git.png`},
  { id: 'git_mr_and_cr', title: 'Git Merge Requests and Code Reviews', date: '2024-10-28', image: `${git_images_path}git_github.png`},
  { id: 'git_basics_commands', title: 'Git Basic Commands', date: '2024-10-29', image: `${git_images_path}github.png`},
];

export default function Git() {
  return (
    <CardsList cards_list={cards_list} />
  );
}
