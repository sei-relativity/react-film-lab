import React, { Component } from "react";

class Fave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFave: false
    };
  }

  handleClick = event => {
    console.log("handling Fave click!");
    event.stopPropagation();

    this.setState({
      isFave: !this.state.isFave
    });

    console.log(this.state.isFave);
  };

  render() {
    const isFaveStatus = this.state.isFave
      ? "remove_from_queue"
      : "add_to_queue";

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
