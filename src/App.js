import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

function App() {
  return (
    <div className="film-library">
      <FilmListing movies ={TMDB}/>
      <FilmDetails movies ={TMDB}/>    
    </div>
  );
}

export default App;
