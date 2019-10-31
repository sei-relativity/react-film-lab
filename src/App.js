// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import FilmListing from './FilmListing';
// import FilmDetails from './FilmDetails';
// import TMDB from './TMDB';

// function App() {
//   return (
//     <div className="film-library">
//       <FilmListing films={TMDB} />
//       <FilmDetails films={TMDB} />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film)
    console.log(filmIndex)
    if (filmIndex >= 0) {
      faves.splice(filmIndex, 1)
      console.log("Removing " + film.title + " from faves...")
    }
    else {
      faves.push(film);
      console.log("Adding " + film.title + " to faves... ")
    }
    this.setState({ faves });
  }
  handleDetailsClick = (title) => {
    console.log("Fetching details for " + title);
    this.setState({
      current: title
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing handleDetailsClick={this.handleDetailsClick} faves={this.state.faves} films={TMDB.films} onFaveToggle={this.handleFaveToggle} />
          <FilmDetails films={TMDB.films} film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;