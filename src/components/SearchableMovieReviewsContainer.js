import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state ={
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchInputChange = event =>
        this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault();
    
        fetch(URL + this.state.searchTerm)
        .then(response => response.json() )
        .then(reviews => this.setState({ reviews: reviews.results}))
    }
 

    render() {
        return(
            <div className="searchabel-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search</label>
                    <input
                        id="search-input"
                        type="text"
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>

                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}