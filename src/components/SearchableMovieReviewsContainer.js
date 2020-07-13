import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSearch = (event) => {
        event.preventDefault()

        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp=>resp.json())
        .then(json => {
            this.setState({reviews: json.results})
        })
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={this.handleSearch}>
                    <span>Enter Movie Review Search Term: </span>
                    <input type='text' onChange={this.handleChange} value={this.state.input} />
                    <button type='submit'>Search Movie Reviews</button>
                </form>
                <div className='searchable-movie-reviews'>
                    <h2>Search Results</h2>
                    < MovieReviews reviews={this.state.reviews} />
                </div>
            </Fragment>
        )
    }
}