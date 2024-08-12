import React from 'react';
import Sidebar from './Sidebar';
import { call911, callFrontDesk } from '../EmergencyServices';

const EmergencyServices = () => {
  return (
    <div className="emergency-services">
      <Sidebar />
      <div className="content">
        <h1>Emergency Services</h1>
        <button onClick={call911}>Call 911</button>
        <button onClick={callFrontDesk}>Call Front Desk</button>
      </div>
    </div>
  );
};

export default EmergencyServices;
