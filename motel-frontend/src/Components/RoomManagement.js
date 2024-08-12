import React, { useState } from 'react';
import roomManagementService from '../RoomManagement';

function RoomManagement() {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState('');

  const handleRequest = () => {
    roomManagementService.addRequest(newRequest).then(data => setRequests(data.requests));
  };

  return (
    <div>
      <h2>Room Management</h2>
      <input 
        type="text" 
        value={newRequest} 
        onChange={(e) => setNewRequest(e.target.value)} 
        placeholder="Enter your request"
      />
      <button onClick={handleRequest}>Send Request</button>
      <ul>
        {requests.map((req, index) => <li key={index}>{req}</li>)}
      </ul>
    </div>
  );
}

export default RoomManagement;
