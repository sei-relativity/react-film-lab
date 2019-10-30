import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  render() {
    const allFilms = this.props.db.films.map((item, key) => {
      return (
        <FilmRow
          key={key}
          year={item.release_date}
          title={item.title}
          postUtl={item.poster_path}
        />
      );
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
