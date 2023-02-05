import { Component } from "react";

class ClickTracker extends Component{

    state = {
        target : null
    }
    
    tracker = (event) => {
        this.setState(  {
            target : event.target.innerHTML
        })
        console.log(event.target.innerHTML)
    }

    render(){
        return(
            <>
            <button onClick={this.tracker}>Click 1</button>
            <button onClick={this.tracker}>Click 2</button>
            <button onClick={this.tracker}>Click 3</button>
            <h1>Il bottone cliccato è : {this.state.target} </h1>
            </>
        )
    }
}


export default ClickTracker;