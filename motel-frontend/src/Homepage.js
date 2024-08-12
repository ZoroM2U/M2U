import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Motel App</h1>
      <div className="user-info">
        <h2>Welcome, John Doe</h2>
        <p>Contact: 123-456-7890</p>
        <p>Email: johndoe@example.com</p>
        <p>Rewards Account: GOLD</p>
      </div>
      <div className="widgets">
        <div className="calendar">
          <h3>August 2024</h3>
          <p>Your stay: 1 night</p>
          {/* Implement a calendar component here */}
        </div>
        <div className="weather-time">
          <p>Time: 1:07:17 PM</p>
          <p>Weather: Sunny 25°C</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
