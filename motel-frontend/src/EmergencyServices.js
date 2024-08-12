import React from 'react';
import { call911, callFrontDesk } from '../src/Services/emergencyService'; // Correct path and exports
import './EmergencyServices.css';

function EmergencyServices() {
  return (
    <div>
      <button onClick={call911}>Call 911</button>
      <button onClick={callFrontDesk}>Call Front Desk</button>
    </div>
  );
}

export default EmergencyServices;
