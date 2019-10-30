import React, {Component} from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }
  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={this.state.films}
           faves={this.state.faves} />

          <FilmDetails film={this.props.current} />
        </div>
      </div>
    );
  }
}

export default App;
