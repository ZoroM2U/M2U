import React from 'react';
import Sidebar from './Sidebar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="content">
        <h1>Motel App</h1>
        <div className="user-info">
          <h2>Welcome, John Doe</h2>
          <p>Contact: 123-456-7890</p>
          <p>Email: johndoe@example.com</p>
          <p>Rewards Account: GOLD</p>
        </div>
        <div className="widgets">
          <div className="calendar-widget">
            <h3>August 2024</h3>
            <div className="calendar">[Calendar Component Here]</div>
          </div>
          <div className="time-weather-widget">
            <h3>Time: 1:07:17 PM</h3>
            <p>Weather: Sunny 25°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
