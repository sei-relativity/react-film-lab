import React, {Component} from 'react';


class Fave extends Component{

    constructor(props){
        super(props)
        this.state = {
        isFave : false
    }
    }

   handleClick = (e) => {
        const textValue = e.target.value;
        console.log("click!");
        e.stopPropagation();
        this.props.onFaveToggle()
      }
  

    render(){
const isFave = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'
const message = this .state.isFave ? 'remove_from_queue' : 'add_to_queue'


        return(
<div className="film-row-fave add_to_queue" onClick={this.handleClick}>
  <p className="material-icons">{message}</p>
</div>
        );
    }
}
export default Fave;