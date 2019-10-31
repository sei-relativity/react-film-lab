import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
 constructor(props){
   super(props)
   this.state={
     film:TMDB.films,
     faves:[],
     current:{}
   }
   this.handleFaveToggle = this.handleFaveToggle.bind(this)
 }
 handleFaveToggle(film){
const faves = [...this.state.faves];

 }
 
  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={TMDB.films} />
          <FilmDetails films={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;