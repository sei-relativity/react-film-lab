import React, { Component } from "react";

class Fave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFave: false
    };
  }

  handleClick = e => {
    console.log("handling Fave click!");
    //literally useless function
    e.stopPropagation();
    this.setState({
        //toggle
      isFave: !this.state.isFave
    });
    console.log(this.state);

  };
  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    return (
      <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}
export default Fave;
