import React, { Component } from 'react'
class Fave extends Component {
    //action
    constructor(props) {
        super(props);
    }
    handleClick = e => {
        e.stopPropagation()
        console.log("handling Fave click!");
        this.props.onFaveToggle()  
    };
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
        console.log(isFave);

        return (
            <div className={`film-row-fave ${isFave}`}>
                <p className="material-icons" onClick={this.handleClick}>{isFave}</p>
            </div>
        );
    }
}

export default Fave;