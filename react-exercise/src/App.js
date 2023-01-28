import React from "react";
import { Welcome } from "./Welcome";
import { Message } from "./Message";

export class App extends React.Component{
    render(){
        return(
            <>
            <Welcome name="Giuseppe!" age="20"/>
            <Message />
            </>
        )
    }
}