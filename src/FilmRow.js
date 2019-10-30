import React, {Component} from 'react';
import Fave from './Fave';

class FilmRow extends Component {
  
  handleDetailsClick = (film) => {
    const textValue = film.target.value;
    console.log("Fetching details for" + this.props.films.title);

  }

    render(){
        const year = new Date(this.props.films.release_date)
        return(
            <div className="film-row">

                {/* posterUrl */}
        <img
          src={"https://image.tmdb.org/t/p/w780/" + this.props.films.poster_path}
          alt=""
        />

        {/* replace "TITLE" and "YEAR" with the actual title and year of the film */}
        {/* getFullYear */}
        <div className="film-summary">
          <Fave/>
          <h1>{this.props.films.title}</h1>
          <p>{year.getFullYear()}</p>
          {/* Film */}
          <button onClick={this.handleDetailsClick}> Film  </button>
        </div>
      </div>
        );
    }
}
export default FilmRow;