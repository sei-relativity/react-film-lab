import React, { Component } from 'react';
import FilmRow from './FilmRow';
class FilmListing extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    render() {
        const allMovies = this.props.movies.films.map(((item, index) => {
            return <FilmRow film={item} key={index} />
        }))

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allMovies}
            </div>
        );
    }
}

export default FilmListing;