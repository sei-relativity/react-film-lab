import React, { Component } from "react";
import Fave from "./Fave";

class FilmRow extends Component {
  render() {
    const theYear = new Date(this.props.year);
    return (
      <div className="film-row">
        <img
          src={`https://image.tmdb.org/t/p/w780${this.props.postUtl}`}
          alt="Movies Images"
        />

        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{theYear.getFullYear()}</p>
        </div>
        <Fave />
      </div>
    );
  }
}

export default FilmRow;
