import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL.concat(this.searchTerm))
            .then(res => res.json())
            .then(reviewData => {this.setState({
                reviews: reviewData.results
            })
        })
    }

    fetchReviews = () => {
        fetch(URL)
            .then(res => res.json())
            .then(reviewData => {this.setState({
                reviews: reviewData.results
            })
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search Movie</label>
                    <input id="search" type="text" />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}
