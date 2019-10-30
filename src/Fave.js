import React, {Component} from 'react';


class Fave extends Component{
    constructor(props){
        super(props);

   const handleClick =(e) => {
            console.log("handling Fave click!");
            e.stopPropagation();



    }
        
}

    render(){
        
        return(
     <div className="film-row-fave add_to_queue">
     <p className="material-icons">onClick={this.handleClick}</p>
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
     </div>
        );
    }
}

export default Fave ;
