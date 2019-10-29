import React from "react";

const FilmPoster = props => {

  const posterUrl = "https://image.tmdb.org/t/p/w780/";

  return (
    <img src={posterUrl + props.posterPath} alt="Film Poster" />
  );
}

export default FilmPoster;