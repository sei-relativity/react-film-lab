import React, { Component } from 'react';

class Fave extends Component{
    handleClick = (e) => {
        e.stopPropagation()
        this.props.onFaveToggle()
        console.log('button clicked'); 
    }


    render(){
        console.log(this.props.isFave);
        const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue'
        const message = this.props.isFave ? "remove_from_queue" : "add_to_queue"
        return (
          <div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
            <p className="material-icons">{message}</p>
          </div>
        )
    }
}

export default Fave;