import React, { Component } from "react";
import FilmRow from "./FilmRow";
import FilmPoster from "./FilmPoster";

class FilmListing extends Component {
  render() {
    const allFillms = this.props.movies.films.map((item, index) => {
      return <FilmRow film={item} key={index} />;
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFillms}
      </div>
    );
  }
}

export default FilmListing;
