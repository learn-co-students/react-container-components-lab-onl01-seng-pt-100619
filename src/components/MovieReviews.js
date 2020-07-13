// Code MovieReviews Here

import React from 'react'

const MovieReviews = props => {
    console.log("reviews Prop in moviereviews component:")
    console.log(props.reviews)
    return(
        <div className='review-list'>
            {props.reviews.map(review => {
                return(
                    <div className='review'>
                        <p>{review.headline}</p>
                        <p>{review.summary_short}</p>
                    </div>
                )
            })}
        </div>) 
}

export default MovieReviews