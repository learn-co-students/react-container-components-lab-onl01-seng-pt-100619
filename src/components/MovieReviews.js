// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    const eachReview = (array) => array.map((review) => <li className="review" id="review">{review.summary_short}</li>)
    return(
        <ul className="review-list">
            {eachReview(props.reviews)}
        </ul>
    )
}

export default MovieReviews