import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component{
    state = {
        reviews: null
    }

    componentDidMount(){
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                            this.setState({reviews: json.results}) 
                            // console.log(this.state.reviews)})
            })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) => {
    //     if(this.state.reviews !== prevState.reviews){
    //         return <MovieReviews reviewList={this.state.reviews}/>
    //     }
    // }


    render(){
        if (this.state.reviews === null){
                return (<div className="latest-movie-reviews">
                            Loading...
                        </div>)
        } else {
                return (<div className="latest-movie-reviews">
                            <MovieReviews reviews={this.state.reviews}/>
                        </div>)
        }
    }
}
