// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

    const renderReviews = () => {
        return props.reviews.map((review, index) => {
          return <li className="review" key={index} >{review.display_title}</li>
        })
      }

    return (
        <div className="review-list">
        <ul>
        {renderReviews()}
        </ul>
        </div>
    )
}

export default MovieReviews