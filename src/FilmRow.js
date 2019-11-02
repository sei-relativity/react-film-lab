import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
  
  handleDetailsClick = (film) => {
  console.log ("fetching details"+ film.title);
  }

  render() {
    const posterURL = "https://image.tmdb.org/t/p/w780";
    //function for determining a path for each movie
    const releasedate = new Date (this.props.film.release_date)
    console.log("date "+releasedate);
    return (
      // XXXXXXXXXXXXXXXXXXXX
    <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)} >
        <img src={posterURL+this.props.film.poster_path} alt="" />
        {/* Doesn't work for some reason, WHYYYY */}
        {/* <FilmPoster film= {this.props.film}/> */}
        <Fave/>
        <div className="film-summary">

          <h1>{this.props.film.title}</h1>
          <h2>{releasedate.getFullYear()}</h2>
          <Fave/>
        </div>
      </div>
    );
  }
}

export default FilmRow;
