import React,{Component} from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component{
  constructor(props){
      super(props)



     const  handleFilterClick =(filter) => {
        console.log("handling filter" + filter);
  }
}
  
  
  
    render() {
const allFilms=this.props.movies.films.map((item ,index) => {
    return <FilmRow film={item} key={index}> </FilmRow>
  
})
        return(
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className="film-list-filter">
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                   <div onClick={() => this.handleFilterClick('faves')} >

                   </div>
                </div>
                <div className="film-list-filter">
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
        
            {allFilms}
        </div>
        )
    }
}


export default FilmListing ;