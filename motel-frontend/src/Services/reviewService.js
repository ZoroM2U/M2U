import axios from 'axios';

const submitReview = (review) => {
  return axios.post('http://localhost:5001/api/review', review)
    .then(response => response.data)
    .catch(error => console.error('Error submitting review:', error));
};

export default { submitReview };
