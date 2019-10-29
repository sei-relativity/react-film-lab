import React  from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow =props => {

    // const year = new Date(this.props.film["release_date"])
    console.log(props.isFave)
    return (
      <div onClick={(e)=>{props.detailsClick()}} className="film-row">
        <FilmPoster film={props.film.poster_path}/>
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          {/* <p>{year.getFullYear()}</p> */}
          <p>{new Date(props.film["release_date"]).getFullYear()}</p>
        </div>
        <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
      </div>
    );
  }

export default FilmRow;
