import React, { useEffect, useState } from 'react';
import motelInfoService from '../MotelInfo';

function MotelInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    motelInfoService.getMotelInfo().then(data => setInfo(data));
  }, []);

  if (!info) return <div>Loading...</div>;

  return (
    <div>
      <h2>Motel Information</h2>
      <p>{info.description}</p>
      {/* Add more information as needed */}
    </div>
  );
}

export default MotelInfo;
