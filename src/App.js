import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmLising from './FilmListing'
import TMDB from './TMDB'

function App() {
  return (
    <div className="film-library">
      <FilmDetails movies={TMDB} />
      <FilmLising  movies={TMDB} />
  

 
</div>
  );
}

export default App;
