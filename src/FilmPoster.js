import React, { Component } from "react";
import FilmRow from "./FilmRow"
const FilmPoster = ()=>{
    const posterURL = "https://image.tmdb.org/t/p/w780/";
    console.log(posterURL + FilmRow.pictures);
    return(
<img src={posterURL+this.props.film.poster_path} alt="" />
    
    )
}
export default FilmPoster;