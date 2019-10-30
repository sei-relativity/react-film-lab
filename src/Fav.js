import React, { Component } from "react";
import { tsConstructorType } from "@babel/types";

class Fav extends Component {

  handleClick = (e) => {
   

(console.log ("handling Fave click!"));
e.stopPropagation()
    }

  render() {
    return (
      <div className="film-row-fave add_to_queue">
        <p className="material-icons" onClick={this.handleClick}>add_to_queue</p>
      </div>
    );
  }
}

export default Fav;
