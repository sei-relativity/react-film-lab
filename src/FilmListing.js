import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  handleFilterClick = string => {
    console.log("Setting filter to ", string);
  };
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
        <div className="film-list-filters">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
