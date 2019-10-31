import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all"
    };
  }

  handleFilterClick = filter => {
    console.log(`Setting filter to ${filter}`);

    this.setState({
      filter: filter
    });
  };

  render() {
    const allFilms = this.props.filmsProp.map(film => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggleProp={() => this.props.onFaveToggleProp(film)}
          handleDetailsClickProp={() => this.props.handleDetailsClickProp(film)}
          isFaveProp={this.props.favesProp.includes(film)}
        />
      );
    });

    const filterStatusAll = this.state.filter === "all" ? "is-active" : "";
    const filterStatusFaves = this.state.filter === "faves" ? "is-active" : "";

    const displayedFilms = this.state.filter === "all" ? allFilms : allFilms;
    console.log(displayedFilms, this.props.favesProp, this.state.filter);


    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${filterStatusAll}`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.movies.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${filterStatusFaves}`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.favesProp.length}</span>
          </div>
        </div>
        {displayedFilms}
{/*
{allFilms} */}

      </div>
    );
  }
}

export default FilmListing;
