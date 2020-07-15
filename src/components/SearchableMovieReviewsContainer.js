import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const currentMovies = document.querySelectorAll("li.review")
        currentMovies.forEach(movie => {
            movie.remove()
        })
        this.fetchSearchableMovieReviews(e)
        e.target.reset()
    }

    fetchSearchableMovieReviews() {
        let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`

        fetch(url)
            .then(resp => resp.json())
            .then(movieData => {
                this.setState({
                    reviews: movieData.results
                })
            })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="search" onChange={this.handleOnChange}/>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}