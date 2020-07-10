import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: null,
        searchTerm: null
    }


    fetchReviews = () => {
        fetch(`${URL} + &query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(json => {
                            this.setState({reviews: json.results}) 
                            // console.log(this.state.reviews)})
            })
    }

    updateSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
        console.log(searchTerm)
    }

    render(){
        if(this.state.reviews === null){
            return (
                    <form onSubmit={this.fetchReviews}>
                        Search movie reviews!
                        <input onChange={event => this.updateSearchTerm(event.target.value)}/>
                        <input type="submit"/>
                    </form>)
        }else { 
            return (<div className="searchable-movie-reviews">
                    <form onSubmit={this.fetchReviews}>
                        <input onChange={event => this.updateSearchTerm(event.target.value)}/>
                        <input type="submit"/>
                    </form>
                    <MovieReviews reviews={this.state.reviews}/>
                </div>)
        }
    }
}