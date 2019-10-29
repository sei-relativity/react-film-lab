import React, {Component} from 'react';
​
class FilmRow extends Component {
    render(){
        return(
         <h1>{this.props.film.title}</h1>
        )
    }
}
​
​
export default FilmRow;