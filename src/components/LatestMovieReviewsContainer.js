import React from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';



export default class LatestMovieReviewsContainer extends React.Component {

    
    constructor() {
        super() 
        this.state = { reviews: []}
        this.fetchReviews() 
    }

    render() {
        return(
            <div className="latest-movie-reviews" onClick={this.handleClick}>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    fetchReviews = () => {
        return (
            fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ")
            .then((resp) => resp.json())
            .then((json) => this.setState({reviews: json.results.slice(0,3)}) )
        )
    }

}

/*
0:
byline: "Ben Kenigsberg"
critics_pick: 0
date_updated: "2020-07-17 05:04:03"
display_title: "Blessed Child"
headline: "‘Blessed Child’ Review: Leaving the Fold, but Not Family"
link: {type: "article", url: "http://www.nytimes.com/2020/07/16/movies/blessed-child-review.html", suggested_link_text: "Read the New York Times Review of Blessed Child"}
mpaa_rating: ""
multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2020/07/15/arts/blessed1/blessed1-mediumThreeByTwo210-v2.jpg", width: 210, height: 140}
opening_date: null
publication_date: "2020-07-16"
summary_short: "A former member of the Rev. Sun Myung Moon’s Unification Church interrogates her relationship with the movement, widely regarded as a cult."
__proto__: Object
1: {display_title: "The Sunlit Night", mpaa_rating: "", critics_pick: 0, byline: "Teo Bugbee", headline: "‘The Sunlit Night’ Review: A Trip to the Arctic to Find Her Muse", …}
2: {display_title: "Dirt Music", mpaa_rating: "", critics_pick: 0, byline: "Jeannette Catsoulis", headline: "‘Dirt Music’ Review

*/
