import React, { Component } from "react";

class FilmPoster extends Component {
  render() {
    return (
      <div>
        <p>{this.props.movies.films.poster_path}</p>
      </div>
    );
  }
}

export default FilmPoster;
