// Code SimpleComponent Here
import React from 'react'; 

export default class SimpleComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }

    toggleMood = () => {
        this.setState({
            mood: "happy" ? "sad" : "happy"
        })
    }

    render(){
        return <div onClick={this.toggleMood}>{this.state.mood}</div>
    }









}