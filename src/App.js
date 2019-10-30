import React from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

function App() {
  return (
    <div className="film-library">
      <FilmListing db={TMDB} />
      <FilmDetails db={TMDB} />
    </div>
  );
}

export default App;
