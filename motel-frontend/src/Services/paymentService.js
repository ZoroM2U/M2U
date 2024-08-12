import axios from 'axios';

const getInvoice = () => {
  return axios.get('http://localhost:5001/api/invoice')
    .then(response => response.data)
    .catch(error => console.error('Error fetching invoice:', error));
};

export default { getInvoice };
