import { Component } from "react";
import Welcome from "./Welcome";
import "./index.css"

class InteractiveWelcome extends Component {
    state = {
        name : " "
    }

    trackForm = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <h1>Form</h1>
                <input name="name" value={this.state.name} onChange={this.trackForm}></input>
                <Welcome name={this.state.name}/>
            </div>
        )
    }

}

export default InteractiveWelcome;


