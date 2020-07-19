// Code MovieReviews Here
import React, { Component } from 'react';
import 'isomorphic-fetch';

const MovieReviews = props => {
    return (
        <div className="review-list">
            {this.props.reviews}

        </div>
    )
}


export default MovieReviews