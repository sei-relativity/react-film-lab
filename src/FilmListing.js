import React, { Component } from "react";
import FilmRow from "./FilmRow";
// import FilmPoster from './FilmPoster';

class FilmListing extends Component {
  render() {
    const allFilms = this.props.movies.films.map((item, index) => {
      return <FilmRow film={item} key={index} />;
    });
  

    // const summary = this.props.movies.films.overview.map((item,index)=>{
    //     return <FilmRow film ={item} key={index} /> })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {/* <h1> {this.props.movies.films[0].title}</h1> */}
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
