import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
            {!!this.props.name && <p>Welcome, {this.props.name}</p>}
            {!this.props.name && <h1>Welcome, User!</h1>}
            <p>Your age is : {this.props.age}</p>
            </div>
        )
    }
}