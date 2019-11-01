import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

const FilmRow = props => {
  const handleDetailsClick = film => {
    console.log(`Fetching details for ${film.title}`);
    props.handleDetailsClickProp();
  };

  const releaseDate = new Date(props.film.release_date);

  return (
    <>
      {/* brackets when send parameters, and need the function be triggered depend on event ***** */}
      <div
        className="film-row"
        onClick={() => handleDetailsClick(props.film)}
      >
        <FilmPoster posterPath={props.film.poster_path} />
        <div className="film-summary">
          <Fave
            onFaveToggleProp={props.onFaveToggleProp}
            isFaveProp={props.isFaveProp}
          />
          <h1>{props.film.title}</h1>
          <p>{releaseDate.getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default FilmRow;
