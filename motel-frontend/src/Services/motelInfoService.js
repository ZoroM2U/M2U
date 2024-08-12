import axios from 'axios';

const getMotelInfo = () => {
  return axios.get('http://localhost:5001/api/motel-info')
    .then(response => response.data)
    .catch(error => console.error('Error fetching motel info:', error));
};

export default { getMotelInfo };
