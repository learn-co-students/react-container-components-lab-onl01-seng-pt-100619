import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted")
        fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }
    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleSearch} type="text" value={this.state.searchTerm}/>
                    <input type="submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer