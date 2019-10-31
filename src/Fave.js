import React, {Component} from "react";


class Fave extends Component {
    constructor(props){
        super(props);

    }
 
    
        // handleClick//
    handleClick = (e) => {
      e.stopPropagation()
      console.log('Handling Fave click!')
    
      // Add this line. You'll call the function passed through props
      this.props.onFaveToggle()
    }

    render() {
      /// add OR remove from Fave ///
      const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
      console.log("isFave", isFave, this.props.isFave)
      return (
          <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
              <p className="material-icons">{(this.props.isFave) ? "remove_from_queue" : "add_to_queue"}</p>
          </div>
      );
  }

  }

export default Fave;
