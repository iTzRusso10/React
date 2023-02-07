import React, { createRef } from "react";

export class TodoList extends React.Component{
    constructor(e){
    super(e);
    this.state = { 
        items: ["Pane"],
    };
}

    input = createRef();

    addList = () => {
        const value = this.input.value;
        this.setState(state => ({
            items: state.items.concat(`${value}`)
        }))
    }
    
    render(){        
        return(
            <ul>
                {this.state.items.map((el, index) => <li key={el + index}>{el}</li>)}
                <input ref={input => (this.input = input)}></input>
                <button onClick={this.addList}>Aggiungi</button>
            </ul>
        )
    }
}