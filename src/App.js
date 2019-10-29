import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import FilmRow from './FilmRow';
import TMDB from './TMDB';

function App() {
  return (
    <>
    <div className="film-library">
      <FilmListing movies={TMDB} />
      <FilmDetails movies={TMDB} />
    </div>
    <div className="film-row">
      {/* <img src={posterUrl} alt="" />
      <div className="film-summary">
        <h1>TITLE</h1>
        <p>YEAR</p>
        <FilmRow />
      </div> */}
    </div>
    </>
  );
}

export default App;
