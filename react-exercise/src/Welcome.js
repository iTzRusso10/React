import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
            {!!this.props.name && <h1>Welcome, {this.props.name}</h1>}
            {!this.props.name && <h1>Welcome, User!</h1>}
            {this.props.age > 18 && this.props.age < 65  &&  this.props.name === `John` && <Age age={23}/> }
            </div>
        )
    }
}