import React from "react";
// import logo from './logo.svg';
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

function App() {
  return (
    <div className="film-library">
      <FilmListing movies={TMDB} />
      <FilmDetails movies={TMDB} />
      <div className="film-row"></div>
    </div>
  );
}

export default App;
