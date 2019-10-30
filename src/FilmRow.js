import React, {Component} from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';
import { tsConstructorType } from '@babel/types';

class FilmRow extends Component {
    
        ConstructorType(this.props){
            super(props)
            this.handleDetailsClick = this.handleDetailsClick.bind(this)

            handleDetailsClick(film) {
                console.log("Fetching details for " + film.title)
        }
    
            <div className="film-row">
  <img src={"https://image.tmdb.org/t/p/w780/"+this.props.film.poster_path}
        alt={this.props.film.title+"poster"}/>
  
  <div className="film-summary">
  <h1>{this.props.film.title} </h1>
  <p>{new Date(this.props.film.release_date).getFullYear()}</p>
    
    
   </div>
   </div>
                   
    }
}
export default FilmRow;