// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [roomInfo, setRoomInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/room-info')
      .then(response => {
        setRoomInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching room info:', error);
      });
  }, []);

  if (!roomInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Room Information</h1>
      <p><strong>Check-in:</strong> {roomInfo.checkIn}</p>
      <p><strong>Check-out:</strong> {roomInfo.checkOut}</p>
      <p>{roomInfo.message}</p>
      <p><strong>Front Desk Contact:</strong> {roomInfo.frontDeskContact}</p>
      <p><strong>Pool Hours:</strong> {roomInfo.poolHours}</p>
      <h2>Breakfast Menu</h2>
      {Object.entries(roomInfo.breakfastMenu).map(([day, menu]) => (
        <div key={day}>
          <h3>{day}</h3>
          <p>{menu}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
