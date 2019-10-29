import React, { Component } from 'react';

class Posterimage extends Component {
    render() {
        return (
            <img src={'https://image.tmdb.org/t/p/w780/' + this.props.poster} alt="poster_path" />
        )
    }
}

export default Posterimage;