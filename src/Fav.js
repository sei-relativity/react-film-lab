import React, { Component } from "react";
// import { tsConstructorType } from "@babel/types";

class Fav extends Component {


  handleClick = (e) => {
    e.stopPropagation()
    console.log('Handling Fav click!')
this.props.onFavToggle()
  }

  render() {
    const isFav = this.props.isFav ? 'remove_from_queue' : 'add_to_queue'
    const message = this.props.isFav ? "remove_from_queue" : "add_to_queue"
   
    return (
      <div className={`film-row-fave ${isFav}`} onClick={this.handleClick}>
        <p className="material-icons">{message}</p>
      </div>
    );
  }
}

export default Fav;
