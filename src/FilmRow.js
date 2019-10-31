import React, {Component} from 'react';
import Fave from './Fave';

class FilmRow extends Component{
    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title}`)
    }


    render(){
        return (
        <div className="film-row" onClick={ ()=> this.handleDetailsClick(this.props.film)}>
            <img src={"https://image.tmdb.org/t/p/w780/"+this.props.film.poster_path} alt="" />

            <div className="film-summary">
            <Fave onFaveToggle={this.props.onFaveToggle}/>
            <h1>{this.props.film.title}</h1>
            <p> {new Date(this.props.film.release_date).getFullYear()}</p>
            </div>
        </div>
            

        )
    }
}

export default FilmRow;