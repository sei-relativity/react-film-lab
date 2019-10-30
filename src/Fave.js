import React, { Component } from 'react';

class Fave extends Component {
    constructor(props){
        super(props)
       
    }

    handleChange = (e)=>{
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="film-row-fave add_to_queue">
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }

}