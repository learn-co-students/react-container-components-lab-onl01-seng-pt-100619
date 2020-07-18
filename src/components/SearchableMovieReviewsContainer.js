import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    render() {
        return (
          <div className="searchable-movie-reviews">
            <h2>Search for Movie Reviews</h2>
            <form onSubmit={this.handleSubmit}>              
              <input type="text" onChange={this.handleSearchInputChange} />
              <button type="submit">Submit</button>
            </form>
            
            <MovieReviews reviews={this.state.reviews} />
          </div>
        )
    }   

    handleSubmit = event => {
        event.preventDefault();

        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ' + (this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    }

    handleSearchInputChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
}