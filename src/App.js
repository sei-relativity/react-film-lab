import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import FilmRow from "./FilmRow";
import TMDB from "./TMDB";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };

    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex < 0) {
      console.log(`Adding ${faves} to faves`);
      faves.push(film);
      console.log(faves);
    } else {
      console.log(`Removing ${faves} from faves`);
      faves.splice(filmIndex, 1);
      console.log(faves);
    }

    this.setState({ faves });
  };

  handleDetailsClick = (film) => {
    this.setState({
      current: film
    })
    console.log(`Fetching details for ${film.title}`);
  }

  render() {
    return (
      <>
        <div className="film-library">
          <FilmListing
            movies={TMDB}
            filmsProp={this.state.films}
            favesProp={this.state.faves}
            onFaveToggleProp={this.handleFaveToggle}
            handleDetailsClickProp={this.handleDetailsClick}
          />
          <FilmDetails movies={TMDB} currentProp={this.state.current} />
        </div>
      </>
    );
  }
}

export default App;
