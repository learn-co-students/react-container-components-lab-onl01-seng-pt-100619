// Code MovieReviews Here
// but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review

import React from "react"

const MovieReviews = (props) => {
    // console.log(props)
    return (
        <div className="review-list">
            {props.reviews.map(review => (
                <div key={review.display_title} className="review">
                    <h1>{review.display_title}</h1>
                </div>
            ))}
        </div>
    )
}

export default MovieReviews