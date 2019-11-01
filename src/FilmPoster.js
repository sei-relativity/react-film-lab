import React, { Component } from 'react';


class FilmPoster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedUrl: ` https://image.tmdb.org/t/p/w780/${this.props.poster.poster_path}`,
            altImg: this.props.poster.title
        }
        console.log("this is a poster test", this.props.poster.poster_path);

    }
    render() {
        return (
            <img src={this.state.editedUrl} alt={this.state.altImg} />
        );
    }
}
export default FilmPoster;