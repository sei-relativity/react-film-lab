import React, { Component } from "react";

class FilmRow extends Component {
  render() {
    var moonLanding = new Date(this.props.year);
    return (
      <div className="film-row">
        <img
          src={{
            uri: "https://image.tmdb.org/t/p/w780/" + this.props.poster_path
          }}
          alt=""
        />

        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{moonLanding.getFullYear(this.props.year)}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
