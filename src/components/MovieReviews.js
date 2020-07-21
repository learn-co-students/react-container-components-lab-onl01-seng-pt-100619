// Code MovieReviews Here
import React from 'react'

function MovieReviews({reviews}) {
    
    
    const renderReview = () => {
        
        return reviews.map(((review, index) => {
            return (<li className='review' key={index}>{review.display_title}</li>)
        }))
    }
    
    return (
        <div className="review-list">
            <ul>
                {renderReview()}
            </ul>
        </div>
    )
}

export default MovieReviews

  




