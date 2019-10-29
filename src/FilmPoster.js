import React from 'react';

const FilmPoster = props => {

    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film}`
    return (
        <img src={posterUrl} alt="" />
    );
  }

export default FilmPoster;
