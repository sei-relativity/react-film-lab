import React, { Component } from "react";

class Fave extends Component {
  handleClick = e => {
    console.log("handling Fave Click!");
  };
  render() {
    return (
      <div className="film-row-fave add_to_queue">
        <p className="material-icons" onClick={this.handleClick}>
          add_to_queue
        </p>
      </div>
    );
  }
}

export default Fave;
