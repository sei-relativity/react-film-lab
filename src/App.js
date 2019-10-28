import React from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import TMBD from "./TMDB";

function App() {
  return (
    <div className="film-library">
      <FilmListing movies={TMBD} />
      <FilmDetails movies={TMBD} />
    </div>
  );
}

export default App;
