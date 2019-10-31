import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      films: TMDB.films,
      faves:[],
      current : {}
      
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
        }
      handleFaveToggle = (film) => {
          const favesList = this.state.faves.slice()
          const filmIndex = favesList.indexOf(film);
        
          if(filmIndex == -1){
              favesList.push(film);
          }
            else{
                favesList.splice(filmIndex,1)
          };
          this.setState({favesList})
        };

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={this.state.films} faves={this.state.favesList} handleFaveToggle={this.handleClick} />
          
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
