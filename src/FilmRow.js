import React, {Component} from 'react';
import Fave from './Fave';

class FilmRow extends Component{
constructor(props){
  super(props)

  const handleDetailsClick=(film)=>{
    console.log("Fetching details for" +film)
  }
}

    render(){
      const year = new Date(this.props.film.release_date);
        return(

          <div className="film-row">
            <div onClick={() => this.handleDetailsClick(props.film)}></div>
          <img src={"https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path}  alt="" />
          <div className="film-summary">
            <Fave/>
         <h1>{this.props.film.title}</h1>
          <p>{year.getFullYear()}</p>
          </div>
          </div>
        );
    }
}
export default FilmRow;