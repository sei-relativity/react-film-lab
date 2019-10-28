import React, {Component} from 'react';
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
  
    render(){


        return(
            <div className="film-row">
                <img src={'https://image.tmdb.org/t/p/w780/' + this.props.film.poster_path}></img>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;