import { Component } from "react";

class Welcome extends Component{
    render(){
        return(
            <h3>Benvenuto, {this.props.name}</h3>
        )
    }
}

export default Welcome;