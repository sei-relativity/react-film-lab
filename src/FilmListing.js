import React, {Component} from 'react';
import FilmRow from './FilmRow';
import FilmPoster from './FilmPoster';
import TMDB from './TMDB';

class FilmListing extends Component{
    constructor(props){
        super(props);

        this.state = {
            filter: ""

        }
    }


    handleClick = (e) => {
        const textValue = e.target.value;
        
        handleFilterClick = (e) => {
            const allFilms = this.props.movies.films.map(item => {
                return <FilmRow films={item}></FilmRow>
            });
        
            
            //  return console.log('Setting filter to' + fl);
             
             this.state = {
                filter: 'all'
            }

        }
    }

    
    
render(){

    return(
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>

           <div className="film-list-filters">
           <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
             
                {/* ALL */}
                onClick = { () => this.handleFilterClick('ALL') }
                <span className="section-count">{this.props.films.length}</span>
           </div>

           <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('FAVES')}>
               {/* FAVES */}
               onClick = { () => this.handleFilterClick('FAVES') }
                <span className="section-count">0</span>
           </div>
        </div>
    
        {this.props.allFilms}
    </div>
    );
 }
}

export default FilmListing;