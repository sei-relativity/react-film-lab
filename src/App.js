import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails.js";
import FilmListing from "./FilmListing.js";
import TMDB from "./TMDB.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };

    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.setState({faves})
  }
 

  handleFaveToggle = (film ) => {
    const favList= this.state.faves.slice();
    const favIndex= favList.indexOf(film);
    if (favIndex == -1){
      favList.push (film);
    }
    else{
      favList.splice(favIndex);
    }

  };

  handleClick = e => {
    e.stopPropagation();
    console.log("Handling Fav click!");

    // Add this line. You'll call the function passed through props

    // Delete the `setState` line. You no longer track state here
    // this.setState({isFave: !this.state.isFave})
  };

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            favesList={this.state.faves}
            handleFaveToggle={this.handleClick}
            onFavToggle={this.handleFaveToggle}
          />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
