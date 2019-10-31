import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {

  // handleDetailsClick = (film) => {
  //   console.log(`Fetching details for ${film.title}`);
  // }

  handleDetailsClick = (film) => {
    this.props.handleDetailsClickProp();
  }

  render() {

    const releaseDate = new Date(this.props.film.release_date);

    return (
      <>
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
          <FilmPoster posterPath={this.props.film.poster_path} />
          <div className="film-summary">
            <Fave onFaveToggleProp={this.props.onFaveToggleProp} isFaveProp={this.props.isFaveProp} />
            <h1>{this.props.film.title}</h1>
            <p>{releaseDate.getFullYear()}</p>
          </div>
        </div>
      </>
    );
  }
}

export default FilmRow;
