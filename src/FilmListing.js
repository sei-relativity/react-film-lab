import React, { Component } from "react";
import FilmRow from "./FilmRow";
// import FilmPoster from './FilmPoster';

class FilmListing extends Component {

  constructor(props){
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick =(filter ) =>{
    this.setState({filter: filter})
    // console.log(`Setting filter to ${filter}`);
  };

  render() {
    const allFilms = this.props.films.map((item, index) => {
      return <FilmRow film={item} key={index} />;
    });
  

    // const summary = this.props.movies.films.overview.map((item,index)=>{
    //     return <FilmRow film ={item} key={index} /> })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
       
        {/* {allFilms}  */}

    <div className="film-list-filters">
    <div onClick={() => this.handleFilterClick('all')}  className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
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
