import React, {Component} from 'react';

class Fave extends Component{

    constructor(props){
        super (props)

        // initial state
        this.state = {
            // isFave: false
        }
    }

    handleClick =(e) => {
        console.log("handling Fave click!");
        e.stopPropagation()
        // this.setState ({
        //     isFave: !this.state.isFave
        // })
        this.props.onFaveToggle(this.props.film);
    }

    render(){

        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
        return (
            <div className={`film-row-fave ${isFave}`}>
                
                <p className="material-icons" 
                onClick={this.handleClick} >{isFave}</p>
            </div>
        )
    }
}

export default Fave;