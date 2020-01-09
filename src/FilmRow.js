import React, {Component} from 'react' ; 
import FilmPoster from './FilmPoster'; 
import Fave from './Fave'; 

class FilmRow extends Component {
    handleDetailsClick = (film) => {
    console.log("Fetching details for "+film) ; 

    }
    render () {
       const year=new Date(this.props.film.release_date); 
     
       return (
           <div className='film-row' onClick={() => this.props.handleDetailsClick(this.props.film)} >
            <FilmPoster film={this.props.film}/>
            <div className="film-summary">
           <Fave  onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} /> 
           <h1>{this.props.film.title}</h1>
           <p>{year.getFullYear()}</p>
        </div> </div>
       )
        }
}   


export default FilmRow ; 