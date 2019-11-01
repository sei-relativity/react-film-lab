import React, { Component } from "react";
import Fav from './Fav';


class FilmRow extends Component {
  handleDetailsClick =(film) =>{
    console.log(`Fetching details ${film.title}`);
  }

  render() {
    const year = new Date(this.props.film.release_date);
    return (
      <div className="film-row">
        <img
          src={"https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path}
          alt=""
        />

        <div className="film-summary">
          <Fav />
          <h1>{this.props.film.title}</h1>
          <p>{year.getFullYear()}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
