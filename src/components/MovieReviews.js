// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    { reviews.map(review) }
  </div>
)

const review = ({ headline, summary_short }) => (
  <div className='review'>
    <h1>{review.headline}</h1>
    <p>{review.summary_short}</p>
  </div>
)



export default MovieReviews