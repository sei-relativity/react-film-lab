import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    render() {
        const allFilms = this.props.movies.films.map((item, index) => {
            return <FilmRow film={item} key={index}></FilmRow>
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <h1>{allFilms}</h1>
            </div>
        )
    }
}

export default FilmListing;