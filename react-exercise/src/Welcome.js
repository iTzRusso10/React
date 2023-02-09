import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <div className="welcome">
            {!!this.props.name && <h1>Welcome, {this.props.name}</h1>}
            {!this.props.name && <h1>Welcome, User!</h1>}
            {this.props.age && <p>You have {this.props.age}</p>}
            </div>
        )
    }
}