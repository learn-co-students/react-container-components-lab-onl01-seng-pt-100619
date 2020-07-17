import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eAbQ09zEQDirNwVx8xC8Px6Y9bZ9qlh5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: []
        }
    }

    fetchLatestReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then( reviewData => {
          this.setState({reviews: reviewData.results})
        })
    }

    componentDidMount() {
        this.fetchLatestReviews()
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
