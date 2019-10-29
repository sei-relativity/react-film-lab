import React, { Component } from "react";
import FilmPoster from "./FilmPoster";

class FilmRow extends Component {
  render() {
    const releaseDate = new Date(this.props.film.release_date);

    return (
      <>
        <div className="film-row">
          <FilmPoster posterPath={this.props.film.poster_path} />
          <div className="film-summary">
            <h1>{this.props.film.title}</h1>
            <p>{releaseDate.getFullYear()}</p>
          </div>
        </div>
      </>
    );
  }
}

export default FilmRow;
