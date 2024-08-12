import axios from 'axios';

const addRequest = (request) => {
  return axios.post('http://localhost:5001/api/requests', { request })
    .then(response => response.data)
    .catch(error => console.error('Error adding request:', error));
};

export default { addRequest };
