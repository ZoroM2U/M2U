import React from 'react';
import './Review.css';

function Review() {
  return (
    <div className="review">
      <h1>Review</h1>
      <textarea placeholder="Write your review here..."></textarea>
      <div className="rating">
        <span>Rate your experience:</span>
        <input type="number" min="1" max="5" />
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Review;
