import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <TodoList>
             {items => {
                return(
                    items.map((el, index) => <li key={index}>{el}</li>)
                    )
                }}
            </TodoList>
        );
    }
}

