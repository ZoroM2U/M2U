import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/motel-info">Motel Information</Link>
      <Link to="/room-management">Room Management</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/emergency-services">Emergency Services</Link>
      <Link to="/review">Review</Link>
    </div>
  );
};

export default Sidebar;
