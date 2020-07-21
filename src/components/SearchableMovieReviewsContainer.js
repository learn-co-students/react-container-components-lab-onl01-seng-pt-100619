import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'jXGygGInQ6w18aBXFujndFjAGEbywop7';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`
            + `&query=`

class SearchableMovieReviewsContainer extends Component {
  
    state = {
        reviews: [],
        searchTerm: ''
    }

  
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results, searchTerm: ''}))
        
    }

  render() {
    return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} id='searchTerm' type='text' value={this.state.searchTerm}></input>
                <input type='submit'></input>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    )
  }
}


export default SearchableMovieReviewsContainer;