import React, {Component} from "react";

class Fave extends Component {
    constructor(props){
        super(props);

        // initlaze State //
    this.state = {
        isFave: false
      };
    }
 
    
        // handleClick//
    handleClick = (e) => {
        const textValue = e.target.value;
        console.log("handling Fave click!");
        e.stopPropagation();

        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        this.setState({
            isFave: !this.state.isFave
           });
    }
    
    
  render() {
    return (
        
      <div className="film-row-fave add_to_queue" >
        <p className="material-icons" onClick={this.handleClick} >add_to_queue</p>
        
      </div>
    );
  }
}

export default Fave;
