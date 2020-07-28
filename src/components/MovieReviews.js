// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map((review) => {
        return (
          <div className="review" key={review.display_title}>
            <h3>{review.display_title}</h3>
            <strong>{review.headline}</strong>
            <br />
            Author: {review.byline}
            <br />
            MPAA Rating: {review.mpaa_rating ? review.mpaa_rating : "n/a"}
            <br />
            Critics Pick: {review.critics_pick}
            <br />
            Summary: {review.summary_short}
            <br />
            <a href={review.link.url}> See Full Review</a>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default MovieReviews;
