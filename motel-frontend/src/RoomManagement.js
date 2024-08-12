import React from 'react';
import './RoomManagement.css';

function RoomManagement() {
  return (
    <div className="room-management">
      <h1>Room Management</h1>
      <ul>
        <li>Request extra toiletries</li>
        <li>Request to skip room service</li>
        <li>Request late checkout</li>
        <li>Enable/Disable "Do Not Disturb" sign</li>
        <li>Report maintenance issues</li>
      </ul>
    </div>
  );
}

export default RoomManagement;
