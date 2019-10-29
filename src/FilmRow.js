import React, { Component } from "react";

class FilmRow extends Component {
  render() {
    const posterURL = "https://image.tmdb.org/t/p/w780/";
    //function for determining a path for each movie
    const releasedate = new Date (this.props.film.release_date)
    return (
      <div className="film-row">
        <img src={posterURL + this.props.film.poster_path} alt="" />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>

          <h2>{releasedate.getFullYear()}</h2>
        </div>
      </div>
    );
  }
}

export default FilmRow;
