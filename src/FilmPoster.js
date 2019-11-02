import React from'react';

// class FilmPoster extends Component {
  
//     render(){
//         return(
//             <img src={'https://image.tmdb.org/t/p/w780/' + this.props.img} alt=''></img>       
//         )
//     }
// }

const FilmPoster = props => {
    return ( 
        <img src={'https://image.tmdb.org/t/p/w780/' + props.img} alt=''></img>   
    )
}

export default FilmPoster;

