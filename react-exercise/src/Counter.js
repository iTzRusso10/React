import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialValue
        }
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
            <h1>Count: {this.state.count}</h1>
        )
    }
}


export default Counter;