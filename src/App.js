import React, {Component} from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor (props){
    super (props);


    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }

    this.handleFaveToggle = this.handleFaveToggle.bind(this);

  }


  handleFaveToggle = (film) => {
    // const faves = this.state.faves.slice(0);
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);
    // console.log(filmIndex);

    if (filmIndex === -1) {
      console.log(`Adding ${film.title} to faves`);
      faves.push(film);
    } else {
      console.log(`Removing ${film.title} from faves`);
      // console.log(faves);
      faves.splice(filmIndex,1);
      // console.log(changedFaveList);
    }

    // console.log(faves);
  
    this.setState({faves});
  }

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    const currentMovie = this.film;
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={this.state.films}
            faves = {this.state.faves}
            onFaveToggle = {this.handleFaveToggle}
            detailsClick = {this.handleDetailsClick}/>

          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
