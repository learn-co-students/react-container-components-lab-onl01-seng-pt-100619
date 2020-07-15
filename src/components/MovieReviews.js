// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    const allMovies = props.reviews.map((review, index) => {
        return(
            <React.Fragment key={index}>
                <li className="review">
                    <h2>{review.display_title}</h2>
                    <h3>{review.headline}</h3>
                    <p>{review.summary_short}</p>
                </li>
            </React.Fragment>
        )
    })

    return(
        <div className="review-list">
            <ol>
                {allMovies}
            </ol>
        </div>
    )
}

export default MovieReviews