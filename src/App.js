import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
// import FilmRow from "./FilmRow";
import TMDB from "./TMDB";
import axios from "axios";

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

  handleFaveToggle = film => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex < 0) {
      console.log(`Adding ${faves} to faves`);
      faves.push(film);
    } else {
      console.log(`Removing ${faves} from faves`);
      faves.splice(filmIndex, 1);
    }

    this.setState({ faves });
  };

  handleDetailsClick = film => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    axios
      .get(url)
      .then(result => {
        console.log(result); // take a look at what you get back!
        console.log(`Fetching details for ${film.title}`);
        this.setState({ current: result.data });
      })
      .catch(console.error);

    this.setState({
      current: film
    });

    console.log(`Fetching details for ${film.title}`);
  };

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
          <FilmDetails movies={TMDB} filmProp={this.state.current} />
        </div>
      </>
    );
  }
}

export default App;
