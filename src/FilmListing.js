import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
    };
  }

  handleFilterClick = filter => {
    console.log('Setting filter to ' + filter);

    this.setState({
       filter: filter
       });
  };

  render() {
    const allFilms = this.props.films.map((film, index) => {
      return (
      <FilmRow handleDetailsClick={() => 
        this.props.handleDetailsClick(film.title)} 
        isFave={(this.props.faves.includes(film) <= 0) ? false : true} 
      onFaveToggle={() => 
        this.props.onFaveToggle(film)} 
        title={film.title} 
        poster_path={film.poster_path} 
        key={index} 
        year={(new Date(film.release_date)).getFullYear()} />
    )
  });

    const allFaves = this.props.faves.map((film, index) => {
      return (
          <FilmRow handleDetailsClick={() =>
             this.props.handleDetailsClick(film.title)} 
             isFave={(this.props.faves.includes(film) <= 0) ? false : true} 
             onFaveToggle={() => 
              this.props.onFaveToggle(film)} 
             title={film.title} 
             poster_path={film.poster_path} 
             key={index} 
             year={(new Date(film.release_date)).getFullYear()} />

      )
  });


    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

          {/*  IF all OR fave */}
          <div className={"film-list-filter " + (this.state.filter === "all" ? "is-active" : "")} onClick={() => this.handleFilterClick('all')}>
                        ALL
            <span className="section-count">{this.props.films.length} </span>
                    </div>
                    <div className={"film-list-filter " + (this.state.filter === "faves" ? "is-active" : "")} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
            <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>

                {(this.state.filter === 'all') ? allFilms : allFaves}
            </div>
    );
  }
}
export default FilmListing;
