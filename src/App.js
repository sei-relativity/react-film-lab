import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import FilmPoster from "./FilmPoster";
import TMDB from "./TMDB";
import FilmRow from "./FilmRow";

function App() {
  return (
    <div className="film-library">

      {/* To git TMDB library  */}
      <FilmListing movies={TMDB} />
    <FilmDetails movies={TMDB} />
    <FilmPoster movies={TMDB}/>
    
    
    </div>
  );
}

export default App;
