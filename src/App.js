import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex === -1) {
      console.log('Adding' + film);
      faves.push(film);
      this.setState({ faves })
    } else {
      console.log('Removing' + film);
      faves.splice(filmIndex, 1);
      this.setState({ faves })
    }
    
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing movies={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} />
        <FilmDetails movies={this.state.faves}></FilmDetails>
      </div>
    );
  }
}

export default App;
