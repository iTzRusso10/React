import { Component } from "react";

class ClickCounter extends Component{
    state = {
        count : 0,
    }

    increment = () => {
        this.setState((state) => {
            return {
                count : state.count + 1
            }
        })
    }

    render(){
        return(
            <>
             <h1>Count : {this.state.count}</h1>
             <button onClick={this.increment}>Increment!</button>
            </>
        )
    }
}

export default ClickCounter;