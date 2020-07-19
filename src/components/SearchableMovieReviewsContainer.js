import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(reviewsData => this.setState({ reviews: reviewsData.results}))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>Search </label>
          <input type='text' onChange={this.handleInputChange} />
          <button type='submit'>Submit</button> 
        </form>

        
        <MovieReviews reviews={this.state.reviews}/>
        
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
