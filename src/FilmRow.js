import React, { Component } from 'react';

class FilmRow extends Component {
    render() { 
        return (
            <h1>{this.props.film.title} {this.props.film.id}</h1>
        );
    }
}
export default FilmRow;