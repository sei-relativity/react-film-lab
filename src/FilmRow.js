import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';



// class FilmRow extends Component {

//     // handleDetailsClick = (film) => {
//     //     console.log(`Fetching details for ${film.title}`);  
//     // }
    
//     render(){
//         // console.log(this.props.isFave);
        
//         return(
//             <div className="film-row"

//             // this on click calls from this component
//              onClick={() => this.props.detailsClick(this.props.films)}>
                 
//                 <FilmPoster img={this.props.film.poster_path} />

//                 <div className="film-summary">
//                     <h1>{this.props.film.title}</h1>
//                     <p>{new Date(this.props.film.release_date).getFullYear()}</p>
//                 </div>

//                 <Fave onFaveToggle={this.props.onFaveToggle}
//                 film={this.props.film} 
//                 isFave={this.props.isFave}/>
//             </div>
//         )
//     }
// }

const FilmRow = (props) => {
    return(
        <div className="film-row"
            // this on click calls from this component
            // e here stops the error of favorite click after details click
             onClick={(e) => props.detailsClick(props.films)}>
                 
                <FilmPoster img={props.film.poster_path} />

                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{new Date(props.film.release_date).getFullYear()}</p>
                </div>

                <Fave onFaveToggle={props.onFaveToggle}
                film={props.film} 
                isFave={props.isFave}/>
            </div>
    )
}

export default FilmRow;