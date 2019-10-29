import React, {Component} from 'react';

class Fave extends Component{

    constructor(props){
        super (props)

        // initial state
        this.state = {
            isFave: false
        }
    }

    handleClick =(e) => {
        console.log("handling Fave click!");
        e.stopPropagation()
        this.setState ({
            isFave: !this.state.isFave
        })
    }

    render(){

        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div className={`film-row-fave ${isFave}`}>
                <p className="material-icons" onClick={this.handleClick} >{isFave}</p>
            </div>
        )
    }
}

export default Fave;