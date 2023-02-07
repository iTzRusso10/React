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

    componentDidMount(){
        this.input.focus()
    }

    componentDidUpdate(){
        this.input.value = ""
    }
    
    reset = () => {
        this.setState({
            items: []
        })
    }

    remove = (index) => {
        this.setState(state => ({
            items: state.items.filter((_, z) => z !== index )  
        }))
    }
    render(){        
        return(
            <ul>
                {this.state.items.map((el, index) => <li key={el + index}>{el}<button onClick={() => this.remove(index)}>Rimuovi</button></li>)}
                <input ref={input => (this.input = input)}></input>
                <button onClick={this.addList}>Aggiungi</button>
                <button onClick={this.reset}>Reset</button>
            </ul>
        )
    }
}