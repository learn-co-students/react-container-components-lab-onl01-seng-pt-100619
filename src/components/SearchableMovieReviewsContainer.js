import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
            
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}`
+ `&query=`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [], 
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(SEARCH_URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews: data.results,
            searchTerm: ""
        }))


        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
                    <input type="submit" value="search"/>
                </form>
                <h2>Search Results:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            
        )
    }
}

export default SearchableMovieReviewsContainer