import React, { useState } from 'react';
import reviewService from '../Review';

function Review() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    reviewService.submitReview({ rating, comment });
  };

  return (
    <div>
      <h2>Review</h2>
      <input 
        type="number" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)} 
        max="5" 
        min="1"
      />
      <textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Write your review"
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}

export default Review;
