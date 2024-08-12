import React from 'react';
import Sidebar from './Sidebar';

const MotelInfo = () => {
  return (
    <div className="motel-info">
      <Sidebar />
      <div className="content">
        <h1>Motel Information</h1>
        <ul>
          <li>Pool Info: Open 11:30 AM - 8:00 PM</li>
          <li>Breakfast Info: 6:00 AM - 9:00 AM</li>
          <li>Laundry Service: Available 24/7</li>
          <li>Gym Info: Open 24/7</li>
          <li>Motel Check-in: 3:00 PM, Checkout: 11:00 AM</li>
          <li>Dining Info: Available 6:00 AM - 11:00 PM</li>
          <li>Help Desk Info: Contact 091 on telephone</li>
        </ul>
      </div>
    </div>
  );
};

export default MotelInfo;
