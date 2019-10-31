import React, { Component } from "react";

class Fave extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // isFave: false
    };
  }

  handleClick = event => {
    event.stopPropagation();
    console.log("handling Fave click!");
    this.props.onFaveToggleProp();
  };

  render() {

    const isFaveStatus = this.props.isFaveProp ? "remove_from_queue" : "add_to_queue";

    return (
      <>
        <div className={`film-row-fave ${isFaveStatus}`}>
          <p className="material-icons" onClick={this.handleClick}>
            {isFaveStatus}
          </p>
        </div>
      </>
    );
  }
}

export default Fave;
