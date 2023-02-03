import { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import  "./index.css";

class Counter extends Component {
        state = {
            count: this.props.initialValue
        }
        componentDidMount(){
         setInterval(() => {
            this.setState((state) => {
                return{
                    count : state.count + this.props.incrementValue
                }
            })
        }, this.props.interval);
    }

    render() {
        return (
            <>
            <h1 className="title"><CounterDisplay /> {this.state.count}</h1>
            {this.state.count >= 10 && <p>Sei arrivato a 10 ba bon mo</p>}
            </>
        )
    }
}
//Constructor is not required!

export default Counter;