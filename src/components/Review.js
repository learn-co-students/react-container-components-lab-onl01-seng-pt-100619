import React from 'react';

// display_title, mpaa_rating, critics_pick, byline, headline, summary_short, link



const Review = ({
  display_title,
  mpaa_rating,
  critics_pick,
  byline,
  headline,
  summary_short,
  link
}) => {

    return(
      <div key={headline} className='review'>
        <a href={link.url}>
        </a>
        <div>
          {display_title} By: {byline}
        </div>
        <div>
          {headline}
        </div>
        <div>
          Ratings: {mpaa_rating}
        </div>
      </div>
    )
  }

export default Review;
