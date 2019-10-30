import React, { Component } from 'react';
import Posterimage from './PosterImage';


class FilmRow extends Component {

    render() {
        
        return (
            // <h1>{this.props.film.title}</h1>
            <div className="film-row">
                <Posterimage poster={this.props.film.poster_path}/>

                <div className="film-summary">
                    <div>film-summary</div>
                    <h1>{this.props.film.title}</h1>

                    <p>{(new Date(this.props.film.release_date).getFullYear())}</p>
                </div>
            </div>
        )
    }

}
export default FilmRow;