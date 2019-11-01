import React from "react";

const FilmDetails = props => {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.filmProp.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.filmProp.poster_path}`;

  let details = props.filmProp.id ? (
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img src={backdropUrl} alt="" />
        <h1 className="film-title">{props.filmProp.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{props.filmProp.tagline}</h2>
        <progress max="10" value={props.filmProp.vote_average}></progress>
        <span> {props.filmProp.vote_average}/10</span>
        <p className="film-detail-overview">
          <img
            src={posterUrl}
            className="film-detail-poster"
            alt={props.filmProp.title}
          />
          {props.filmProp.overview}
        </p>
      </div>
    </div>
  ) : (
    <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  );

  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details}
    </div>
  );
};

export default FilmDetails;
