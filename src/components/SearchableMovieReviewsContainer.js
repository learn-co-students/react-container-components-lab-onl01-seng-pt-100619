import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eAbQ09zEQDirNwVx8xC8Px6Y9bZ9qlh5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}`+ '&query='

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
          searchTerm: event.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        fetch(SEARCH_URL + this.state.searchTerm) 
        .then(response => response.json())
        .then(resultData => {
          this.setState({
            reviews: resultData.results,
            searchTerm: "" 
          })
        })
    
      }

      render(){
        return (
          <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.searchTerm}
            />
            <input type="submit"></input>
            </form>
            <MovieReviews reviews={this.state.reviews} />
          </div>
        )
      }
}
