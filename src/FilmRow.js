import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
    //to change parent calls, create a private var and assign parent's value to it. :) 
    constructor(props) {
        super(props)
        this.state = {
            release_date: new Date(this.props.film.release_date) //new var with parent's value
        }
        console.log(this.state.release_date);
        console.log('this is a test', this.props.film.poster_path)

    }

    render() {
        return (
            <div className="film-row">
                <FilmPoster poster={this.props.film} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.state.release_date.getFullYear()}</p>
                </div>
            </div>
        );
    }
}
export default FilmRow;