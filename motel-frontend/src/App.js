import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MotelInfo from './Components/MotelInfo';
import RoomManagement from './Components/RoomManagement';
import Payment from './Components/Payment';
import EmergencyServices from './Components/EmergencyServices';
import Review from './Components/Review';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/motel-info" element={<MotelInfo />} />
          <Route path="/room-management" element={<RoomManagement />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/emergency-services" element={<EmergencyServices />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
