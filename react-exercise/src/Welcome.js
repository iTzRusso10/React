import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
            {!!this.props.name && <h1>Welcome, {this.props.name}</h1>}
            {!this.props.name && <h1>Welcome, User!</h1>}
            {this.props.age && <Age/>}
            </div>
        )
    }
}