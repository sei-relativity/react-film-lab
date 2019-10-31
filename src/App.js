import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import axios from 'axios'
import TMDB from './TMDB.js';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  handleFaveToggle(film){
    const fave = [...this.state.faves]
    const filmIndex =fave.indexOf(film)

    if(filmIndex!==-1){
      fave.splice(filmIndex,1)
      this.setState({
        faves: fave
      })
    }else{
      this.setState({
        faves: [...this.state.faves, film]
      })
    }

  }

  handleDetailsClick =(film)=>{
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    })
    .then(response=>{
      console.log(response.data)
      console.log(`Fetching  details for ${film.title}`)
      this.setState({
        current: response.data
      })
    }).catch( error =>{
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films= {this.state.films}
           faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            detailsClick={this.handleDetailsClick}
            />
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;