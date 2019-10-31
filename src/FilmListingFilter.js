import React, { Component } from 'react';

class FilmListingFilter extends Component {
  constructor(props) {
    super()
    this.state = {
      filter: 'all'
    }
  }
  handleFilterClick(filter) {
    console.log(`handleFilterClick filter is ${filter}`)
    this.setState({
      filter: filter
    })
  }
  render() {
  
    return (
      <div>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.allFilms.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {this.state.filter === 'faves' ? this.props.allFilms.filter(film => film.props.isFave) : this.props.allFilms}            
        </div>
    );
  }
}

export default FilmListingFilter;
