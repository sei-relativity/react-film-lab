import React  from 'react';
import FilmRow from './FilmRow'
import FilmListingFilter from './FilmListingFilter';

const FilmListing =(props)=> {


    const allFilms = props.films.map((film) => {
      return <FilmRow film={film} key={film.id}
        onFaveToggle={() => props.onFaveToggle(film)}
        isFave={props.faves.includes(film)}
        detailsClick={() => props.detailsClick(film)}
      />
    })
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <FilmListingFilter 
        allFilms={allFilms}
           faves={props.faves}/>
      </div>
    );
}

export default FilmListing;
