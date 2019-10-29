import React, { Component } from 'react';

class Fave extends Component {

  constructor(props){
    super();
    this.state={
      // isFave: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation()
    console.log('Handling Fave click!')

    this.props.onFaveToggle()
 
  }
  render() {
    return (
      <div className={`film-row-fave ${(this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'}`} onClick={this.handleClick}>
        <p className="material-icons">{(this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'}</p>
      </div>
    );
  }
}

export default Fave;
