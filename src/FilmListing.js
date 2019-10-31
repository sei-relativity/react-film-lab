import React, { Component } from 'react';
import FilmRow from './FilmRow';
import Fave from './Fave';
class FilmListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
    }
    handleFilterClick = (filter) => {
        this.setState({
            filter: filter
        })
    }
    render() {
        const allMovies = this.props.movies.map(((item) => {
            return <FilmRow film={item} key={item.id} 
            onFaveToggle={() => this.props.onFaveToggle(item)}
            isFave={this.props.Fave}/>
        }))

        return (
            <div className="film-list">
                <h1 className="section-title" >FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.movies.length}</span>
                    </div>
                    <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allMovies}
            </div>
        );
    }
}
export default FilmListing;