import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: "all"
    }
  }

  handleFilterClick = (filter) =>{
    console.log("Setting filter to "+filter);
  }

  render() {
    //functions go here
    const allFilms = this.props.movies.films.map((item, index) => {
      //passing each film individually to FilmRow
      return <FilmRow film={item} key={index} />
    })

    return (
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter" onClick={() => this.handleFilterClick("all")}>
        {/* this.props.faves */}
            ALL
            <span className="section-count">{this.props.movies.films.length}</span>
        </div>
        {/* this.props.faves */}
        <div className="film-list-filter" onClick={() => this.handleFilterClick("faves")}>  
         
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>
    );
  }
}

export default FilmListing;
