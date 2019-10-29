import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

function App() {
  return (
    <div className="film-library">
      <h1 className="section-title">FILMS</h1>
      <FilmListing movies={TMDB}/>
      <FilmDetails movies={TMDB}/>
      </div>
  
    

  )}

export default App;
