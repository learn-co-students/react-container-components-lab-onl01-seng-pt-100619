import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => {
                this.setState({...this.state, reviews: data.results})
            })
    }

    handleChange = (e) => {
        this.setState({...this.state, searchTerm: e.target.value})
    }

    handleClick = (e) => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
            .then(resp => resp.json())
            .then(data => this.setState({...this.state, reviews: data.results}))
            // .then(console.log(this.state))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form>
                    <input value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <button type="submit" onClick={this.handleClick}>Search</button>
                    <MovieReviews reviews={this.state.reviews}/>
                </form>
            </div>
        )
    }
}
