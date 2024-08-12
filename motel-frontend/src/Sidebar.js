import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/motel-info">Motel Information</Link></li>
        <li><Link to="/room-management">Room Management</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/emergency-services">Emergency Services</Link></li>
        <li><Link to="/review">Review</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
