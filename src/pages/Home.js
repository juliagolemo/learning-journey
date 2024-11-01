import React from 'react';
import MyTimeline from '../components/TimeLine';
import './Home.css';


export default function Home() {
  return (
    <div>
      <h1 className="centered-header">My Career TimeLine</h1>
      <div>
        <MyTimeline />
      </div>
    </div>
  );
}
